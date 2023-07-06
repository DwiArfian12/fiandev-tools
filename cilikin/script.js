var pil = "biner";

function pilBiner() {
  (pil = "biner"),
    (document.getElementById("lbl1").innerHTML = "Biner"),
    (document.getElementById("lbl2").innerHTML = "Oktal"),
    (document.getElementById("lbl3").innerHTML = "Desimal"),
    (document.getElementById("lbl4").innerHTML = "Heksadesimal");
}

function pilOktal() {
  (pil = "oktal"),
    (document.getElementById("lbl1").innerHTML = "Oktal"),
    (document.getElementById("lbl2").innerHTML = "Biner"),
    (document.getElementById("lbl3").innerHTML = "Desimal"),
    (document.getElementById("lbl4").innerHTML = "Heksadesimal");
}

function pilDesimal() {
  (pil = "desimal"),
    (document.getElementById("lbl1").innerHTML = "Desimal"),
    (document.getElementById("lbl2").innerHTML = "Biner"),
    (document.getElementById("lbl3").innerHTML = "Oktal"),
    (document.getElementById("lbl4").innerHTML = "Heksadesimal");
}

function pilHeksadesimal() {
  (pil = "heksadesimal"),
    (document.getElementById("lbl1").innerHTML = "Heksadesimal"),
    (document.getElementById("lbl2").innerHTML = "Biner"),
    (document.getElementById("lbl3").innerHTML = "Oktal"),
    (document.getElementById("lbl4").innerHTML = "Desimal");
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    convert();
  }
});

function convert() {
  if ("biner" == pil) {
    var e = 0;
    e = document.getElementById("input").value;
    var t = parseInt(e, 2),
      n = parseInt(e, 2).toString(8),
      l = parseInt(e, 2).toString(16);
    (document.getElementById("output1").value = n),
      (document.getElementById("output2").value = t),
      (document.getElementById("output3").value = l.toUpperCase());
  } else if ("oktal" == pil) {
    e = 0;
    e = document.getElementById("input").value;
    var u = parseInt(e, 8).toString(2);
    (t = parseInt(e, 8)), (l = parseInt(e, 8).toString(16));
    (document.getElementById("output1").value = u),
      (document.getElementById("output2").value = t),
      (document.getElementById("output3").value = l.toUpperCase());
  } else if ("desimal" == pil) {
    e = 0;
    e = document.getElementById("input").value;
    (u = parseInt(e, 10).toString(2)),
      (n = parseInt(e, 10).toString(8)),
      (l = parseInt(e, 10).toString(16));
    (document.getElementById("output1").value = u),
      (document.getElementById("output2").value = n),
      (document.getElementById("output3").value = l.toUpperCase());
  } else if ("heksadesimal" == pil) {
    e = 0;
    e = document.getElementById("input").value;
    (u = parseInt(e, 16).toString(2)),
      (n = parseInt(e, 16).toString(8)),
      (t = parseInt(e, 16));
    (document.getElementById("output1").value = u),
      (document.getElementById("output2").value = n),
      (document.getElementById("output3").value = t);
  }
}
