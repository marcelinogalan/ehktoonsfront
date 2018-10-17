(function(exports) {
  'use strict';

  //Polyfill support for matches method
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector;
  }

  const isShadow = document.body && (document.body.createShadowRoot || document.body.attachShadow);

  function cleanSelectors(selectors) {
    return selectors.filter(function(sel) {
      return sel && sel.trim().length > 0;
    });
  }

  function collectionAsArray(collection) {
    var array = [];
    if (collection) {
      for (var i = 0; i < collection.length; i++) {
        array.push(collection.item(i));
      }
    }
    return array;
  }

  function uniqueConcat(original, added) {
    var result = original.slice(0);
    added.forEach(function(element) {
      if (result.indexOf(element) < 0) {
        result.push(element);
      }
    });

    return result;
  }

  function getShadowChildren(element) {
    if (element.shadowRoot) {
      return collectionAsArray(element.shadowRoot.children);
    }

    return [];
  }

  function getCommonChildren(element) {
    return collectionAsArray(element.children);
  }

  function getChildren(element) {
    return [].concat(getShadowChildren(element)).concat(getCommonChildren(element));
  }

  function getNextElement(currentElement, nextSelector) {
    var children = getChildren(currentElement);
    var found = null;

    for (var i = 0; i < children.length; i++) {
      found = children[i].matches(nextSelector) ? children[i] : getNextElement(children[i], nextSelector);
      if (found) {
        break;
      }
    }

    return found;
  }

  function getNextElements(currentElement, nextSelector) {
    var children = getChildren(currentElement);
    var nextElements = [];

    children.forEach(function(child) {
      if (child.matches(nextSelector)) {
        nextElements.push(child);
      }

      nextElements = nextElements.concat(getNextElements(child, nextSelector));
    });

    return nextElements;
  }

  function findElement(selectors, baseElement) {
    var currentElement = baseElement || document.documentElement;

    for (var i = 0; i < selectors.length; i++) {
      currentElement = getNextElement(currentElement, selectors[i]);
      if (!currentElement) {
        break;
      }
    }

    return currentElement;
  }

  function findElements(selectors, baseElement) {
    var currentElements = [ baseElement || document.documentElement ];

    for (var i = 0; i < selectors.length; i++) {
      var nextElements = [];
      for (var j = 0; j < currentElements.length; j++) {
        nextElements = uniqueConcat(nextElements, getNextElements(currentElements[j], selectors[i]));
      }
      currentElements = nextElements;
    }

    return currentElements;
  }

  function querySelector(query, fromElement) {
    var selectors = cleanSelectors(isShadow ? query.split(' ') : [query]);

    return findElement(selectors, fromElement);
  }

  function querySelectorAll(query, fromElement) {
    var selectors = cleanSelectors(isShadow ? query.split(' ') : [query]);

    return findElements(selectors, fromElement);
  }

  exports.querySelector = querySelector;
  exports.querySelectorAll = querySelectorAll;
}(window.Shadow = window.Shadow || {}));
