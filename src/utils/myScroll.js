function isFuncNative(f) {
    return (
      !!f &&
      (typeof f).toLowerCase() === "function" &&
      (f === Function.prototype ||
        /^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code\]\s*}\s*$/i.test(
          String(f)
        ))
    );
  }
  export function myScroll(left, top, behaviour) {
    if (isFuncNative(window.scrollTo)) {
      window.scrollTo({ left: left, top: top, behavior: behaviour });
    } else if (isFuncNative(window.scroll)) {
      window.scroll({ left: left, top: top, behavior: behaviour });
    } else {
      document.body.scrollLeft = left;
      document.body.scrollTop = top;
    }
  }
  
  export function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
  
    return true;
  }