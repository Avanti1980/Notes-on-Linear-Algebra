require(['gitbook'], function(gitbook) {
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      processEscapes: true,
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
    },
    TeX: {
      equationNumbers: {autoNumber: 'all', useLabelIds: true},
      Macros: {
        zerov: '{\\boldsymbol 0}',
        onev: '{\\boldsymbol 1}',
        av: '{\\boldsymbol a}',
        bv: '{\\boldsymbol b}',
        cv: '{\\boldsymbol c}',
        dv: '{\\boldsymbol d}',
        ev: '{\\boldsymbol e}',
        fv: '{\\boldsymbol f}',
        gv: '{\\boldsymbol g}',
        hv: '{\\boldsymbol h}',
        iv: '{\\boldsymbol i}',
        jv: '{\\boldsymbol j}',
        kv: '{\\boldsymbol k}',
        lv: '{\\boldsymbol l}',
        mv: '{\\boldsymbol m}',
        nv: '{\\boldsymbol n}',
        ov: '{\\boldsymbol o}',
        pv: '{\\boldsymbol p}',
        qv: '{\\boldsymbol q}',
        rv: '{\\boldsymbol r}',
        sv: '{\\boldsymbol s}',
        tv: '{\\boldsymbol t}',
        uv: '{\\boldsymbol u}',
        vv: '{\\boldsymbol v}',
        wv: '{\\boldsymbol w}',
        xv: '{\\boldsymbol x}',
        yv: '{\\boldsymbol y}',
        zv: '{\\boldsymbol z}',
        Av: '{\\mathbf A}',
        Bv: '{\\mathbf B}',
        Cv: '{\\mathbf C}',
        Dv: '{\\mathbf D}',
        Ev: '{\\mathbf E}',
        Fv: '{\\mathbf F}',
        Gv: '{\\mathbf G}',
        Hv: '{\\mathbf H}',
        Iv: '{\\mathbf I}',
        Jv: '{\\mathbf J}',
        Kv: '{\\mathbf K}',
        Lv: '{\\mathbf L}',
        Mv: '{\\mathbf M}',
        Nv: '{\\mathbf N}',
        Ov: '{\\mathbf O}',
        Pv: '{\\mathbf P}',
        Qv: '{\\mathbf Q}',
        Rv: '{\\mathbf R}',
        Sv: '{\\mathbf S}',
        Tv: '{\\mathbf T}',
        Uv: '{\\mathbf U}',
        Vv: '{\\mathbf V}',
        Wv: '{\\mathbf W}',
        Xv: '{\\mathbf X}',
        Yv: '{\\mathbf Y}',
        Zv: '{\\mathbf Z}',
        alphav: '{\\boldsymbol {\\alpha}}',
        betav: '{\\boldsymbol {\\beta}}',
        lambdav: '{\\boldsymbol {\\lambda}}',
        thetav: '{\\boldsymbol {\\theta}}',
        muv: '{\\boldsymbol {\\mu}}',
        zetav: '{\\boldsymbol {\\zeta}}',
        Cbb: '{\\mathbb C}',
        Ebb: '{\\mathbb E}',
        Hbb: '{\\mathbb H}',
        Nbb: '{\\mathbb N}',
        Pbb: '{\\mathbb P}',
        Qbb: '{\\mathbb Q}',
        Rbb: '{\\mathbb R}',
        Sbb: '{\\mathbb S}',
        Acal: '{\\mathcal A}',
        Bcal: '{\\mathcal B}',
        Dcal: '{\\mathcal D}',
        Fcal: '{\\mathcal F}',
        Hcal: '{\\mathcal H}',
        Ical: '{\\mathcal I}',
        Lcal: '{\\mathcal L}',
        Mcal: '{\\mathcal M}',
        Ncal: '{\\mathcal N}',
        Ocal: '{\\mathcal O}',
        Pcal: '{\\mathcal P}',
        Scal: '{\\mathcal S}',
        Tcal: '{\\mathcal T}',
        Xcal: '{\\mathcal X}',
        Ycal: '{\\mathcal Y}',
        diff: '{\\mathrm {d}}',
        diag: '{\\mathrm {diag}}',
        spn: '{\\mathrm {span}}',
        sign: '{\\mathrm {sign}}',
        st: '{\\mathrm {s.t.}}',
        ow: '{\\mathrm {o.w.}}',
        dom: '{\\mathrm {dom}}',
        sgn: '{\\mathrm {sgn}}',
        VC: '{\\mathrm {VC}}',
        argmin: '{\\arg \\min}',
        argmax: '{\\arg \\max}',
        arginf: '{\\arg \\inf}',
        argsup: '{\\arg \\sup}',
      },
      extensions:
          ['action.js', 'cancel.js', 'enclose.js', 'mhchem.js', 'extpfeil.js'],
      mhchem: {legacy: true}
    }
  });


  gitbook.events.bind('page.change', function() {
    MathJax.Hub.Typeset()
  });
});
