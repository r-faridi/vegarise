
//Run Loading
export const Loading = function (IsOpen) {
    if (IsOpen === 1) {
        document.getElementById("overlay").style.display = "block";
    } else {
        document.getElementById("overlay").style.display = "none";
    }
}

//TitleBar
export const TitleBar = function (Title) {
    document.title = Title;
    document.getElementById('breadcrumb').innerHTML = Title;

}
//CheckNetwork
export const CheckNetwork = function () {
    if (window.navigator.onLine) {
        return true;
    }
    return false;
}

export const ShowAlert = function (type, title, content) {
    let alerts = new CustomAlerts({
        autoclose: 0
    });
    alerts.alert({
        type: type,
        title: title,
        content: content,
        autoclose: 3000
    })
}

export const ReloadList = function () {
    document.getElementById('BtnSearch').click();
}


class CustomAlerts { constructor(e = {}) { this.delay = e.delay || 100, this.autoclose = "number" == typeof e.autoclose ? e.autoclose : 5e3, this.load() } load() { if (!document.querySelector(".sticky-alerts")) { let e = document.createElement("div"); e.className = "sticky-alerts", document.body.appendChild(e) } document.querySelector(".sticky-alerts").addEventListener("mouseenter", (e => { e.target.classList.add("userint") })), document.querySelector(".sticky-alerts").addEventListener("mouseleave", (e => { e.target.classList.remove("userint"), document.querySelectorAll(".sticky-alerts .alert").forEach((e => { this.autoClose(e, e.dataset.autoclose || this.autoclose) })) })) } alert(e = {}) { let t = e.title || "Alert", a = e.content || "", s = e.id || "", l = e.type || "primary", o = e.delay || this.delay, n = "number" == typeof e.autoclose ? e.autoclose : this.autoclose; document.querySelector(".sticky-alerts").offsetHeight > window.innerHeight && document.querySelector(".sticky-alerts .alert:last-child").remove(), setTimeout((() => { let e = document.createElement("div"); s && (e.id = s), e.className = "alert show alert-" + l, n != this.autoClose && (e.dataset.autoclose = n); let o = document.createElement("div"); o.className = "alert-header"; let r = document.createElement("div"); r.className = "title", r.textContent = t; let c = document.createElement("span"); if (c.className = "close", c.textContent = "x", c.addEventListener("click", (e => { e.target.parentElement.parentElement.classList.add("fadeOut"), setTimeout((() => { e.target.parentElement.parentElement.remove() }), 500) })), o.appendChild(r), o.appendChild(c), e.appendChild(o), a) { let t = document.createElement("div"); t.className = "content", t.innerHTML = a, e.appendChild(t) } document.querySelector(".sticky-alerts").prepend(e), setTimeout((() => { e.classList.add("fadeIn") }), 1), this.autoClose(e, n) }), o) } autoClose(e, t) { t >= 1 && setTimeout((() => { e.parentElement && !e.parentElement.classList.contains("userint") && (e.classList.add("fadeOut"), setTimeout((() => { e.remove() }), 300)) }), t) } }








