(function(e) {
    function t(t) {
        for (var s, o, l = t[0], n = t[1], c = t[2], m = 0, u = []; m < l.length; m++)
            o = l[m],
            Object.prototype.hasOwnProperty.call(i, o) && i[o] && u.push(i[o][0]),
            i[o] = 0;
        for (s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
        d && d(t);
        while (u.length)
            u.shift()();
        return r.push.apply(r, c || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < r.length; t++) {
            for (var a = r[t], s = !0, l = 1; l < a.length; l++) {
                var n = a[l];
                0 !== i[n] && (s = !1)
            }
            s && (r.splice(t--, 1),
            e = o(o.s = a[0]))
        }
        return e
    }
    var s = {}
      , i = {
        app: 0
    }
      , r = [];
    function o(t) {
        if (s[t])
            return s[t].exports;
        var a = s[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, o),
        a.l = !0,
        a.exports
    }
    o.m = e,
    o.c = s,
    o.d = function(e, t, a) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, t) {
        if (1 & t && (e = o(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (o.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var s in e)
                o.d(a, s, function(t) {
                    return e[t]
                }
                .bind(null, s));
        return a
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || []
      , n = l.push.bind(l);
    l.push = t,
    l = l.slice();
    for (var c = 0; c < l.length; c++)
        t(l[c]);
    var d = n;
    r.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    1: function(e, t) {},
    "1c9e": function(e, t, a) {
        "use strict";
        a("c975"),
        a("a434"),
        a("b0c0");
        var s = a("b233")
          , i = a("6a60");
        function r() {
            function e(e, t) {
                for (var a = 0; a < e.newFamilly.length; a++) {
                    var s = t.selfPlayer.cards.indexOf(e.newFamilly[a]);
                    t.selfPlayer.cards.splice(s, 1),
                    t.gameLogic.statut = "playerFamily";
                    var i = new Audio("/sounds/famille.mp3");
                    i.volume = .4,
                    i.play(),
                    setTimeout((function() {
                        t.gameLogic.statut = "playerReplay"
                    }
                    ), 2500)
                }
            }
            s["a"].socket.on("card:answer", (function(t) {
                (0 === t.newCard || t.newCard) && setTimeout((function() {}
                ), 8e3),
                t.hasCard ? (s["a"].gameLogic.statut = "playerAskTo",
                new Audio("/sounds/bulle.mp3").play(),
                setTimeout((function() {
                    s["a"].gameLogic.action.cardID = t.newCard,
                    s["a"].gameLogic.action.cardName = i["a"][t.newCard].name,
                    s["a"].gameLogic.action.cardFamily = i["a"][t.newCard].family,
                    t.hasPicked ? (s["a"].gameLogic.statut = "playerDraw",
                    new Audio("/sounds/draw.mp3").play(),
                    setTimeout((function() {
                        s["a"].gameLogic.deck = t.newDeck,
                        new Audio("/sounds/card-sound.mp3").play()
                    }
                    ), 1500),
                    setTimeout((function() {
                        s["a"].selfPlayer.cards.push(t.newCard),
                        s["a"].selfPlayer.cards.sort((function(e, t) {
                            return e - t
                        }
                        )),
                        s["a"].gameLogic.statut = "goodPick",
                        new Audio("/sounds/found-card.mp3").play(),
                        setTimeout((function() {
                            t.newFamilly ? (s["a"].selfPlayer.score += 1,
                            s["a"].players[s["a"].selfPlayer.playerID].score += 1,
                            e(t, s["a"])) : s["a"].gameLogic.statut = "playerReplay"
                        }
                        ), 2500)
                    }
                    ), 2500)) : (s["a"].players[t.toPlayerIndex].cards.splice(0, 1),
                    s["a"].gameLogic.statut = "playerNewCard",
                    s["a"].selfPlayer.cards.push(t.newCard),
                    s["a"].selfPlayer.cards.sort((function(e, t) {
                        return e - t
                    }
                    )),
                    new Audio("/sounds/found-card.mp3").play(),
                    setTimeout((function() {
                        t.newFamilly ? (s["a"].selfPlayer.score += 1,
                        s["a"].players[s["a"].selfPlayer.playerID].score += 1,
                        e(t, s["a"])) : s["a"].gameLogic.statut = "playerReplay"
                    }
                    ), 2500))
                }
                ), 2500)) : t.hasCard || (t.toPlayerIndex ? (s["a"].gameLogic.statut = "playerAskTo",
                new Audio("/sounds/bulle.mp3").play()) : s["a"].gameLogic.statut = "playerPickCard",
                setTimeout((function() {
                    t.hasPicked ? (t.toPlayerIndex && (s["a"].gameLogic.statut = "playerDraw",
                    new Audio("/sounds/draw.mp3").play(),
                    setTimeout((function() {
                        new Audio("/sounds/card-sound.mp3").play(),
                        s["a"].gameLogic.deck = t.newDeck
                    }
                    ), 1300)),
                    setTimeout((function() {
                        s["a"].gameLogic.statut = "newCard",
                        s["a"].gameLogic.action.cardID = t.newCard,
                        s["a"].gameLogic.action.cardName = i["a"][t.newCard].name,
                        s["a"].gameLogic.action.cardFamily = i["a"][t.newCard].family,
                        setTimeout((function() {
                            s["a"].selfPlayer.cards.push(t.newCard),
                            s["a"].selfPlayer.cards.sort((function(e, t) {
                                return e - t
                            }
                            ))
                        }
                        ), 2500),
                        setTimeout((function() {
                            t.newFamilly ? (s["a"].selfPlayer.score += 1,
                            s["a"].players[s["a"].selfPlayer.playerID].score += 1,
                            e(t, s["a"])) : (s["a"].gameLogic.statut = "playerTurn",
                            s["a"].gameLogic.actualTurn = t.nextPlayer)
                        }
                        ), 2500)
                    }
                    ), 1700)) : (s["a"].gameLogic.statut = "emptyDraw",
                    new Audio("/sounds/draw.mp3").play(),
                    setTimeout((function() {
                        s["a"].gameLogic.actualTurn = t.nextPlayer,
                        s["a"].gameLogic.statut = "playerTurn"
                    }
                    ), 2500))
                }
                ), 2500))
            }
            )),
            s["a"].socket.on("card:action", (function(e) {
                s["a"].gameLogic.action.fromPlayerID = e.fromPlayerIndex,
                e.toPlayerIndex ? (s["a"].gameLogic.action.cardID = e.cardID,
                e.cardID && (s["a"].gameLogic.action.cardName = i["a"][e.cardID].name,
                s["a"].gameLogic.action.cardFamily = i["a"][e.cardID].family),
                s["a"].gameLogic.action.toPlayerID = e.toPlayerIndex,
                s["a"].gameLogic.statut = "playerAskTo",
                new Audio("/sounds/bulle.mp3").play(),
                setTimeout((function() {
                    if (e.hasCard && !e.hasPicked && e.cardID >= 0) {
                        if (s["a"].gameLogic.statut = "playerNewCard",
                        new Audio("/sounds/found-card.mp3").play(),
                        s["a"].players[e.toPlayerIndex].cards.splice(0, 1),
                        s["a"].players[e.fromPlayerIndex].cards.push(!0),
                        s["a"].socket.sid == e.toPlayerIndex) {
                            var t = s["a"].selfPlayer.cards.indexOf(e.cardID);
                            s["a"].selfPlayer.cards.splice(t, 1)
                        }
                        e.newFamilly ? setTimeout((function() {
                            s["a"].players[e.fromPlayerIndex].cards.splice(0, 6),
                            s["a"].gameLogic.statut = "playerFamily";
                            var t = new Audio("/sounds/famille.mp3");
                            t.volume = .4,
                            t.play(),
                            s["a"].players[e.fromPlayerIndex].score += 1,
                            setTimeout((function() {
                                s["a"].gameLogic.statut = "playerReplay"
                            }
                            ), 2500)
                        }
                        ), 2500) : setTimeout((function() {
                            s["a"].gameLogic.statut = "playerReplay"
                        }
                        ), 2500)
                    } else
                        e.hasPicked ? (s["a"].gameLogic.statut = "playerDraw",
                        new Audio("/sounds/draw.mp3").play(),
                        setTimeout((function() {
                            new Audio("/sounds/card-sound.mp3").play(),
                            s["a"].gameLogic.deck = e.newDeck,
                            s["a"].players[e.fromPlayerIndex].cards.push(!0)
                        }
                        ), 1500),
                        e.hasCard && setTimeout((function() {
                            s["a"].gameLogic.statut = "goodPick",
                            e.newFamilly ? setTimeout((function() {
                                s["a"].players[e.fromPlayerIndex].cards.splice(0, 6),
                                s["a"].gameLogic.statut = "playerFamily";
                                var t = new Audio("/sounds/famille.mp3");
                                t.volume = .4,
                                t.play(),
                                s["a"].players[e.fromPlayerIndex].score += 1,
                                setTimeout((function() {
                                    s["a"].gameLogic.statut = "playerReplay"
                                }
                                ), 2500)
                            }
                            ), 2500) : setTimeout((function() {
                                s["a"].gameLogic.statut = "playerReplay"
                            }
                            ), 2500)
                        }
                        ), 2500)) : (s["a"].gameLogic.statut = "emptyDraw",
                        new Audio("/sounds/draw.mp3").play(),
                        setTimeout((function() {
                            s["a"].gameLogic.actualTurn = e.nextPlayer,
                            s["a"].gameLogic.statut = "playerTurn"
                        }
                        ), 2500));
                    setTimeout((function() {
                        "emptyDraw" != s["a"].gameLogic.statut && s["a"].gameLogic.actualTurn != e.nextPlayer && (s["a"].gameLogic.actualTurn = e.nextPlayer,
                        s["a"].gameLogic.statut = "playerTurn")
                    }
                    ), 2500)
                }
                ), 2500)) : e.hasPicked && (s["a"].gameLogic.statut = "playerPickCard",
                new Audio("/sounds/card-sound.mp3").play(),
                setTimeout((function() {
                    if (s["a"].gameLogic.actualTurn = e.nextPlayer,
                    s["a"].players[e.fromPlayerIndex].cards.push(!0),
                    e.hasCard ? (s["a"].gameLogic.statut = "goodPick",
                    setTimeout((function() {
                        s["a"].gameLogic.statut = "playerReplay"
                    }
                    ), 2500)) : s["a"].gameLogic.statut = "playerTurn",
                    e.newFamilly) {
                        s["a"].players[e.fromPlayerIndex].cards.splice(0, 6),
                        s["a"].gameLogic.statut = "playerFamily";
                        var t = new Audio("/sounds/famille.mp3");
                        t.volume = .4,
                        t.play(),
                        s["a"].players[e.fromPlayerIndex].score += 1
                    }
                }
                ), 2500))
            }
            )),
            s["a"].socket.on("game:finish", (function() {
                setTimeout((function() {
                    s["a"].display.modalGameOver = !0
                }
                ), 5e3)
            }
            )),
            s["a"].socket.on("room:kick", (function() {
                window.location.href = "/"
            }
            )),
            s["a"].socket.on("room:playerLeave", (function(e) {
                s["a"].players[e.sid].bot = !0,
                s["a"].display.modalPlayerLeave = e.sid
            }
            )),
            s["a"].socket.on("ping", (function() {
                s["a"].socket.emit("game:pong")
            }
            ))
        }
        setTimeout((function() {
            r()
        }
        ), 0)
    },
    "25e0": function(e, t, a) {
        "use strict";
        var s = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [e.myPlayerLayout ? a("div", {
                staticClass: "container h-100"
            }, [a("div", {
                staticClass: "row h-100 pb-5"
            }, [a("div", {
                staticClass: "col-12 mx-auto"
            }, [a("Header")], 1), a("div", {
                staticClass: "col-12 mx-auto"
            }, [a("div", {
                staticClass: "row tabletop-wrapper bg-info p-1"
            }, [a("div", {
                staticClass: "w-100 tabletop bg-pattern p-4 position-relative"
            }, [a("div", {
                staticClass: "row align-items-center"
            }, [e.$store.gameLogic.playerLayout[2] ? a("div", {
                staticClass: "col-12 text-center"
            }, [a("Player", {
                attrs: {
                    position: "left",
                    player: e.$store.players[e.$store.gameLogic.playerOrder[e.myPlayerLayout[2]]]
                }
            })], 1) : e._e(), a("div", {
                staticClass: "col-4 col-lg"
            }, [a("div", {
                staticClass: "row h-100"
            }, [e.$store.gameLogic.playerLayout[1] ? a("div", {
                staticClass: "col-12 align-items-center d-flex justify-content-center"
            }, [a("Player", {
                attrs: {
                    position: "left",
                    player: e.$store.players[e.$store.gameLogic.playerOrder[e.myPlayerLayout[1]]]
                }
            })], 1) : e._e(), e.$store.gameLogic.playerLayout[0] ? a("div", {
                staticClass: "col-12 align-items-center d-flex justify-content-center"
            }, [a("Player", {
                attrs: {
                    position: "left",
                    player: e.$store.players[e.$store.gameLogic.playerOrder[e.myPlayerLayout[0]]]
                }
            })], 1) : e._e()])]), a("div", {
                staticClass: "col-4 col-lg-auto px-lg-4"
            }, [a("Stack")], 1), a("div", {
                staticClass: "col-4 col-lg"
            }, [a("div", {
                staticClass: "row h-100"
            }, [e.$store.gameLogic.playerLayout[3] ? a("div", {
                staticClass: "col-12 align-items-center d-flex justify-content-center"
            }, [a("Player", {
                attrs: {
                    position: "right",
                    player: e.$store.players[e.$store.gameLogic.playerOrder[e.myPlayerLayout[3]]]
                }
            })], 1) : e._e(), e.$store.gameLogic.playerLayout[4] ? a("div", {
                staticClass: "col-12 align-items-center d-flex justify-content-center"
            }, [a("Player", {
                attrs: {
                    position: "right",
                    player: e.$store.players[e.$store.gameLogic.playerOrder[e.myPlayerLayout[4]]]
                }
            })], 1) : e._e()])]), a("div", {
                staticClass: "col-12 text-center"
            }, [a("MyPlayer", {
                attrs: {
                    player: e.$store.selfPlayer
                }
            })], 1)])])])])])]) : e._e(), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [a("MyCards", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.$store.display.mycards,
                    expression: "$store.display.mycards"
                }]
            })], 1), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, ["askCard" == e.$store.gameLogic.statut ? a("AskCard", {
                attrs: {
                    statut: e.$store.gameLogic.statut
                }
            }) : e._e()], 1), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [e.$store.display.modalGameOver ? a("ModalGameOver") : e._e()], 1), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [a("ModalGameRestarted", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.$store.display.modalGameRestarted,
                    expression: "$store.display.modalGameRestarted"
                }]
            })], 1), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [e.$store.display.tutorial ? a("Tutorial") : e._e()], 1)], 1)
        }
          , i = []
          , r = (a("ac1f"),
        a("5319"),
        function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "my-4 text-center row mx-0 align-items-end justify-content-center w-100"
            }, [a("div", {
                staticClass: "ml-2 mr-2 ml-md-3 ml-lg-0 mr-md-3"
            }, [a("p", {
                staticClass: "text-white small mb-2"
            }, [e.player.bot ? a("span", [e._v("🤖 ")]) : e._e(), e._v(e._s(e.player ? e.player.playername : "Bonjour!"))]), a("div", {
                staticClass: "position-relative avatar-player d-inline-block playing",
                class: {
                    ask: ("playerTurn" == e.$store.gameLogic.statut || "playerReplay" == e.$store.gameLogic.statut) && e.$store.selfPlayer.playerIndex == e.$store.gameLogic.actualTurn && e.player.cards.length > 0
                },
                on: {
                    click: e.askCard
                }
            }, [a("img", {
                staticClass: "rounded-circle img-fluid avatar",
                attrs: {
                    src: "/images/avatars/Avatar" + e.avatar + ".png",
                    srcset: "/images/avatars/Avatar" + e.avatar + "@2x.png 2x",
                    alt: ""
                }
            }), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.$store.gameLogic.actualTurn == e.player.playerIndex,
                    expression: "$store.gameLogic.actualTurn == player.playerIndex"
                }],
                staticClass: "circle rounded-circle border-warning position-absolute overflow-hidden"
            }, [a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [a("svg", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "playerTurn" == e.$store.gameLogic.statut || "playerReplay" == e.$store.gameLogic.statut,
                    expression: "$store.gameLogic.statut == 'playerTurn' || $store.gameLogic.statut ==  'playerReplay'"
                }],
                staticClass: "position-absolute",
                staticStyle: {
                    "enable-background": "new 0 0 24 24"
                },
                attrs: {
                    version: "1.1",
                    id: "Calque_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 24 24",
                    "xml:space": "preserve",
                    width: "24",
                    height: "24"
                }
            }, [a("path", {
                attrs: {
                    fill: "#ff4e00",
                    d: "M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12C24,5.4,18.6,0,12,0z"
                }
            }), a("g", [a("circle", {
                attrs: {
                    fill: "#fff",
                    cx: "6.5",
                    cy: "12.5",
                    r: "1.5"
                }
            }), a("circle", {
                attrs: {
                    fill: "#fff",
                    cx: "12.5",
                    cy: "12.5",
                    r: "1.5"
                }
            }), a("circle", {
                attrs: {
                    fill: "#fff",
                    cx: "18.5",
                    cy: "12.5",
                    r: "1.5"
                }
            })])])])], 1)]), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [0 == e.player.cards.length ? a("div", {
                staticClass: "circle-nocard rounded-circle position-absolute overflow-hidden d-flex align-items-center justify-content-center"
            }, [a("img", {
                attrs: {
                    src: "/images/pictos/ic_not_allowed.svg",
                    alt: "Picto passe son tour Appui 7 familles"
                }
            })]) : e._e()]), a("Bulles", {
                attrs: {
                    player: e.player,
                    position: e.position
                }
            }), a("transition", {
                attrs: {
                    name: "growUp"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.player.score > 0,
                    expression: "player.score > 0"
                }],
                staticClass: "score position-absolute"
            }, [a("div", {
                staticClass: "tooltip fade bs-tooltip-top position-absolute"
            }, [a("div", {
                staticClass: "arrow"
            }), a("div", {
                staticClass: "tooltip-inner small py-2"
            }, [e._v("Nombre de familles complétées")])]), a("p", {
                staticClass: "text-white bg-danger border border-white rounded px-1 mb-0"
            }, [e._v(" " + e._s(e.player.score) + " ")])])])], 1)]), a("transition-group", {
                staticClass: "hand d-flex mt-2 mt-md-3",
                attrs: {
                    name: "slideDown",
                    tag: "div"
                }
            }, e._l(e.player.cards.slice(0, 5).length, (function(t) {
                return a("div", {
                    key: t,
                    staticClass: "hand-card-wrapper position-relative"
                }, [a("div", {
                    staticClass: "hand-card border-white position-absolute d-flex align-items-center justify-content-center"
                }, [t == e.player.cards.slice(0, 5).length && e.player.cards.length > 5 ? a("p", {
                    staticClass: "mb-0 font-weight-semibold text-white"
                }, [e._v(" +" + e._s(e.player.cards.length - 5) + " ")]) : a("img", {
                    staticClass: "p-2 p-xl-3 img-fluid-all",
                    attrs: {
                        src: "/images/Logo_versoCarte.png",
                        srcset: "/images/Logo_versoCarte@2x.png 2x",
                        alt: ""
                    }
                })])])
            }
            )), 0)], 1)
        }
        )
          , o = []
          , l = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("transition", {
                attrs: {
                    name: "growUp"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.$store.gameLogic.action.toPlayerID == e.player.playerID && "playerNewCard" == e.$store.gameLogic.statut,
                    expression: "$store.gameLogic.action.toPlayerID == player.playerID &&\n          $store.gameLogic.statut == 'playerNewCard'"
                }],
                staticClass: "bulle bg-white border rounded-circle position-absolute",
                class: e.position
            }, [a("img", {
                attrs: {
                    src: "/images/pictos/ic_check.svg",
                    alt: "Icone carte trouvée Appui 7 familles",
                    width: "40px",
                    height: "40px"
                }
            })])]), a("transition", {
                attrs: {
                    name: "growUp"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.$store.gameLogic.action.toPlayerID == e.player.playerID && ("playerDraw" == e.$store.gameLogic.statut || "emptyDraw" == e.$store.gameLogic.statut),
                    expression: "$store.gameLogic.action.toPlayerID == player.playerID &&\n            ($store.gameLogic.statut == 'playerDraw' ||\n            $store.gameLogic.statut == 'emptyDraw')"
                }],
                staticClass: "bulle bg-white border rounded-circle position-absolute",
                class: e.position
            }, [a("img", {
                attrs: {
                    src: "/images/pictos/ic_cancel.svg",
                    alt: "Carte non trouvée Appui 7 familles",
                    width: "40px",
                    height: "40px"
                }
            })])]), a("transition", {
                attrs: {
                    name: "growUp"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "playerAskTo" == e.$store.gameLogic.statut && e.$store.gameLogic.action.fromPlayerID === e.player.playerID,
                    expression: "$store.gameLogic.statut == 'playerAskTo' && $store.gameLogic.action.fromPlayerID === player.playerID"
                }],
                staticClass: "bulle-square position-absolute",
                class: e.position
            }, [a("div", {
                staticClass: "box-square-content bg-white border rounded p-3 d-flex align-items-center justify-content-between",
                class: "float-" + e.position
            }, ["" !== e.$store.gameLogic.action.toPlayerID ? a("img", {
                staticClass: "rounded-circle img-fluid avatar",
                attrs: {
                    src: "/images/avatars/Avatar" + e.$store.players[e.$store.gameLogic.action.toPlayerID].avatar + ".png",
                    srcset: "/images/avatars/Avatar" + e.$store.players[e.$store.gameLogic.action.toPlayerID].avatar + "@2x.png 2x"
                }
            }) : e._e(), a("p", {
                staticClass: "ml-2 mb-0 p-1 text-white h2 rounded",
                style: "width:46px;background-color:" + e.$deck[e.$store.gameLogic.action.cardID].color
            }, [e._v(e._s(e.$store.gameLogic.action.cardFamily[0]))]), a("p", {
                staticClass: "ml-2 mb-0 font-weight-semibold"
            }, [e._v(e._s(e.$store.gameLogic.action.cardName) + "?")])])])])], 1)
        }
          , n = []
          , c = {
            name: "Bulles",
            props: ["player", "position"],
            data: function() {
                return {
                    avatar: this.player ? this.player.avatar : "",
                    toPlayerAvatar: this.$store.gameLogic.action.toPlayerID ? this.$store.players[this.$store.gameLogic.action.toPlayerID].avatar : ""
                }
            }
        }
          , d = c
          , m = a("2877")
          , u = Object(m["a"])(d, l, n, !1, null, null, null)
          , p = u.exports
          , g = {
            name: "Player",
            props: ["player", "position"],
            components: {
                Bulles: p
            },
            data: function() {
                return {
                    avatar: this.player ? this.player.avatar : ""
                }
            },
            methods: {
                askCard: function() {
                    this.player.cards.length > 0 && this.$store.selfPlayer.playerIndex == this.$store.gameLogic.actualTurn && ("playerTurn" == this.$store.gameLogic.statut || "playerReplay" == this.$store.gameLogic.statut) && (this.$store.gameLogic.statut = "askCard",
                    this.$store.gameLogic.askToPlayer = this.player)
                }
            }
        }
          , v = g
          , y = Object(m["a"])(v, r, o, !1, null, null, null)
          , f = y.exports
          , b = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("Message"), a("div", {
                staticClass: "my-4 text-center"
            }, [a("div", {
                staticClass: "row align-items-center justify-content-center"
            }, [a("div", {
                staticClass: "col-auto my-2 my-sm-0"
            }, [a("p", {
                staticClass: "text-white small mb-1"
            }, [e._v(e._s(e.player.playername))]), a("div", {
                staticClass: "position-relative avatar-player d-inline-block playing"
            }, [a("img", {
                staticClass: "rounded-circle img-fluid avatar",
                attrs: {
                    src: "/images/avatars/Avatar" + e.player.avatar + ".png",
                    srcset: "/images/avatars/Avatar" + e.player.avatar + "@2x.png 2x",
                    alt: ""
                }
            }), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.$store.gameLogic.actualTurn == e.player.playerIndex,
                    expression: "$store.gameLogic.actualTurn == player.playerIndex"
                }],
                staticClass: "circle rounded-circle border-success position-absolute overflow-hidden"
            }, ["playerTurn" == e.$store.gameLogic.statut || "playerReplay" == e.$store.gameLogic.statut ? a("svg", {
                staticClass: "position-absolute",
                staticStyle: {
                    "enable-background": "new 0 0 24 24"
                },
                attrs: {
                    version: "1.1",
                    id: "Calque_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 24 24",
                    "xml:space": "preserve",
                    width: "24",
                    height: "24"
                }
            }, [a("path", {
                attrs: {
                    fill: "#ff4e00",
                    d: "M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12C24,5.4,18.6,0,12,0z"
                }
            }), a("g", [a("circle", {
                attrs: {
                    fill: "#fff",
                    cx: "6.5",
                    cy: "12.5",
                    r: "1.5"
                }
            }), a("circle", {
                attrs: {
                    fill: "#fff",
                    cx: "12.5",
                    cy: "12.5",
                    r: "1.5"
                }
            }), a("circle", {
                attrs: {
                    fill: "#fff",
                    cx: "18.5",
                    cy: "12.5",
                    r: "1.5"
                }
            })])]) : e._e()])]), a("Bulles", {
                attrs: {
                    player: e.player,
                    position: "left"
                }
            }), a("transition", {
                attrs: {
                    name: "growUp"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.player.score > 0,
                    expression: "player.score > 0"
                }],
                staticClass: "score position-absolute"
            }, [a("div", {
                staticClass: "tooltip fade bs-tooltip-top position-absolute"
            }, [a("div", {
                staticClass: "arrow"
            }), a("div", {
                staticClass: "tooltip-inner small py-2"
            }, [e._v("Nombre de familles complétées")])]), a("p", {
                staticClass: "text-white bg-danger border border-white rounded px-1 mb-0"
            }, [e._v(" " + e._s(e.player.score) + " ")])])])], 1)]), a("div", {
                staticClass: "col-auto position-relative"
            }, [a("transition-group", {
                staticClass: "my-hand d-flex",
                attrs: {
                    name: "slideUp",
                    tag: "div"
                }
            }, e._l(e.player.cards, (function(t) {
                return a("div", {
                    key: t,
                    staticClass: "hand-card-wrapper position-relative flex-fill"
                }, [a("div", {
                    staticClass: "hand-card border-white position-absolute bg-white"
                }, [a("p", {
                    staticClass: "mb-0 text-white card-letter border-white d-flex align-items-center justify-content-center position-absolute",
                    style: "background-color:" + e.$deck[t].color
                }, [e._v(" " + e._s(e.$deck[t].family[0]) + " ")]), a("img", {
                    staticClass: "img-fluid-all pt-3 px-2 pb-1",
                    attrs: {
                        src: e.$deck[t].image,
                        srcset: e.$deck[t].image + " 2x",
                        alt: ""
                    }
                })])])
            }
            )), 0), e.player.cards.length > 0 ? a("button", {
                staticClass: "btn btn-sm btn-info my-cards-button position-absolute text-nowrap",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.mycards = !0
                    }
                }
            }, [e._v(" Consulter mes cartes ")]) : e._e()], 1)])]), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [e.$store.display.modalYourTurn && e.player.playerIndex == e.$store.gameLogic.actualTurn ? a("ModalYourTurn") : e._e()], 1)], 1)
        }
          , h = []
          , _ = (a("4160"),
        a("b64b"),
        a("159b"),
        function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("div", {
                staticClass: "d-flex align-items-center justify-content-around message-wrapper"
            }, [a("div", {
                staticClass: "rounded bg-white text-center p-3 w-100"
            }, [a("p", {
                staticClass: "mb-0 font-weight-semibold message"
            }, [a("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, ["starting" == e.$store.gameLogic.statut ? a("span", {
                key: e.$store.gameLogic.statut
            }, [e._v(" Distribution des cartes... ")]) : "playerTurn" == e.$store.gameLogic.statut || "askCard" == e.$store.gameLogic.statut ? a("span", {
                key: e.$store.gameLogic.statut
            }, [e.$store.selfPlayer.playerIndex !== e.$store.gameLogic.actualTurn ? a("span", [e._v(" C'est au tour de " + e._s(e.$store.players[e.$store.gameLogic.playerOrder[e.$store.gameLogic.actualTurn]].playername) + ". ")]) : a("span", [e._v(" C'est à vous! "), a("br"), a("strong", [e._v("Sélectionnez le joueur de votre choix")]), e._v(" pour lui demander une carte. ")])]) : "playerAskTo" == e.$store.gameLogic.statut ? a("span", {
                key: e.$store.gameLogic.statut
            }, [e.$store.selfPlayer.playerIndex === e.$store.gameLogic.actualTurn ? a("span", [e._v(" Vous demandez à " + e._s(e.$store.players[e.$store.gameLogic.action.toPlayerID].playername) + " "), a("strong", [e._v(" " + e._s(e.$store.gameLogic.action.cardName) + " ")]), e._v(" de la famille "), a("strong", [e._v(e._s(e.$store.gameLogic.action.cardFamily))]), e._v("... ")]) : e.$store.gameLogic.action.toPlayerID !== e.$store.selfPlayer.playerID ? a("span", [e._v(" " + e._s(e.$store.players[e.$store.gameLogic.action.fromPlayerID].playername) + " demande à " + e._s(e.$store.players[e.$store.gameLogic.action.toPlayerID].playername) + " "), a("strong", [e._v(" " + e._s(e.$store.gameLogic.action.cardName) + " ")]), e._v(" de la famille "), a("strong", [e._v(" " + e._s(e.$store.gameLogic.action.cardFamily))]), e._v("... ")]) : a("span", [e._v(" " + e._s(e.$store.players[e.$store.gameLogic.action.fromPlayerID].playername) + " vous demande "), a("strong", [e._v(" " + e._s(e.$store.gameLogic.action.cardName) + " ")]), e._v(" de la famille "), a("strong", [e._v(e._s(e.$store.gameLogic.action.cardFamily))]), e._v("... ")])]) : "emptyHand" == e.$store.gameLogic.statut ? a("span", {
                key: e.$store.gameLogic.statut
            }, [e._v(" Plus de cartes en mains... ")]) : "playerPickCard" == e.$store.gameLogic.statut ? a("span", {
                key: e.$store.gameLogic.statut
            }, [e.$store.gameLogic.action.toPlayerID !== e.$store.selfPlayer.playerID ? a("span", [e._v(" " + e._s(e.$store.players[e.$store.gameLogic.action.fromPlayerID].playername) + " pioche une carte. ")]) : a("span", [e._v(" Vous piochez une carte. ")])]) : "newCard" == e.$store.gameLogic.statut ? a("span", {
                key: e.$store.gameLogic.statut
            }, [e._v(" Vous piochez "), a("strong", [e._v(e._s(e.$store.gameLogic.action.cardName))]), e._v(" de la famille "), a("strong", [e._v(e._s(e.$store.gameLogic.action.cardFamily))]), e._v(". ")]) : "playerNewCard" == e.$store.gameLogic.statut ? a("span", {
                key: e.$store.gameLogic.statut
            }, [e.$store.selfPlayer.playerIndex === e.$store.gameLogic.actualTurn ? a("span", [e._v(" Vous prenez la carte demandée à " + e._s(e.$store.players[e.$store.gameLogic.action.toPlayerID].playername) + ". ")]) : a("span", [e._v(" " + e._s(e.$store.players[e.$store.gameLogic.action.fromPlayerID].playername) + " prend la carte demandée à " + e._s(e.$store.players[e.$store.gameLogic.action.toPlayerID].playername) + ". ")])]) : "playerReplay" == e.$store.gameLogic.statut ? a("span", {
                key: e.$store.gameLogic.statut
            }, [e.$store.selfPlayer.playerIndex !== e.$store.gameLogic.actualTurn ? a("span", [e._v(" C’est encore à " + e._s(e.$store.players[e.$store.gameLogic.playerOrder[e.$store.gameLogic.actualTurn]].playername) + ". ")]) : a("span", [e._v(" C’est encore à vous : "), a("span", [e._v("demandez une carte au joueur de votre choix.")]), e._v(". ")])]) : "playerDraw" == e.$store.gameLogic.statut ? a("span", {
                key: e.$store.gameLogic.statut
            }, [e.$store.gameLogic.action.toPlayerID !== e.$store.selfPlayer.playerID ? a("span", [e._v(" " + e._s(e.$store.players[e.$store.gameLogic.action.toPlayerID].playername) + " ne possède pas la carte demandée. "), a("strong", [e._v(e._s(e.$store.players[e.$store.gameLogic.action.fromPlayerID].playername) + " pige dans la pioche.")])]) : a("span", [e._v(" Vous ne possédez pas la carte demandée. "), a("strong", [e._v(e._s(e.$store.players[e.$store.gameLogic.action.fromPlayerID].playername) + " pige dans la pioche.")])])]) : "directDraw" == e.$store.gameLogic.statut ? a("span", {
                key: e.$store.gameLogic.statut
            }, [a("strong", [e._v("Vous pigez dans la pioche.")])]) : "emptyDraw" == e.$store.gameLogic.statut ? a("span", {
                key: e.$store.gameLogic.statut
            }, [e._v(" " + e._s(e.$store.players[e.$store.gameLogic.action.toPlayerID].playername) + " ne possède pas la carte demandée. "), a("strong", [e._v("Mais la pioche est vide.")])]) : "playerFamily" == e.$store.gameLogic.statut ? a("span", {
                key: e.$store.gameLogic.statut
            }, [e.$store.selfPlayer.playerIndex !== e.$store.gameLogic.actualTurn ? a("span", [a("strong", [e._v("Famille!"), a("br"), e._v("La carte " + e._s(e.$store.gameLogic.action.cardName) + " complète sa main!")]), a("br"), e._v("C’est encore à son tour. ")]) : a("span", [a("strong", [e._v("Famille!"), a("br"), e._v("La carte " + e._s(e.$store.gameLogic.action.cardName) + " complète votre main!")])])]) : "goodPick" == e.$store.gameLogic.statut ? a("span", {
                key: e.$store.gameLogic.statut
            }, [a("strong", [e._v("Bonne pioche!")])]) : e._e()])], 1)])])])
        }
        )
          , C = []
          , x = {
            name: "Message"
        }
          , w = x
          , $ = Object(m["a"])(w, _, C, !1, null, null, null)
          , k = $.exports
          , L = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "modal-mask z-first-first bg-dark-95"
            }, [a("div", {
                staticClass: "modal-wrapper",
                on: {
                    click: function(t) {
                        if (t.target !== t.currentTarget)
                            return null;
                        e.$store.display.modalYourTurn = !1
                    }
                }
            }, [a("div", {
                staticClass: "modal-dialog modal-dialog-centered",
                attrs: {
                    role: "document"
                }
            }, [a("div", {
                staticClass: "modal-content bg-transparent p-0 border-0"
            }, [a("div", {
                staticClass: "bg-white rounded p-4 p-md-5 text-center"
            }, [a("img", {
                staticClass: "mb-3 spinning",
                attrs: {
                    src: "/images/pictos/ic_loading.svg",
                    alt: "",
                    width: "48px",
                    height: "48px"
                }
            }), a("p", {
                staticClass: "font-weight-semibold mb-1 big"
            }, [e._v(" C'est votre tour! ")]), e._m(0), a("button", {
                staticClass: "btn btn-sm btn-primary btn-block mt-3",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.closeAll
                }
            }, [e._v(" Retourner sur le jeu ")])]), a("button", {
                staticClass: "btn btn-sm btn-light btn-block mt-3",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalYourTurn = !1
                    }
                }
            }, [e._v(" Fermer cette fenêtre ")])])])])])
        }
          , P = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("p", {
                staticClass: "text-muted mb-4"
            }, [e._v(" Les autres joueurs vous attendent, ne tardez pas à jouer!"), a("br"), e._v("Sans action de votre part, vous allez jouer automatiquement. ")])
        }
        ]
          , I = (a("c975"),
        a("b0c0"),
        a("ade3"))
          , j = {
            name: "ModalYourTurn",
            data: function() {
                return {
                    cardID: 0,
                    toPlayerID: 0,
                    timeoutPlay: ""
                }
            },
            methods: {
                closeAll: function() {
                    for (var e in this.$store.display)
                        this.$store.display[e] = !1
                },
                selectRngPlayer: function(e, t) {
                    var a = "";
                    for (var s in e)
                        e[s].playerID != t && e[s].cards.length && (!a || e[s].cards.length > e[a].cards.length) && (a = s);
                    return a
                },
                selectRngCard: function(e) {
                    for (var t, a = (t = {},
                    Object(I["a"])(t, 1, []),
                    Object(I["a"])(t, 2, []),
                    Object(I["a"])(t, 3, []),
                    Object(I["a"])(t, 4, []),
                    Object(I["a"])(t, 5, []),
                    Object(I["a"])(t, 6, []),
                    Object(I["a"])(t, 7, []),
                    t), s = e.cards, i = 0; s[i]; i++)
                        s[i] >= 0 && s[i] <= 5 ? a[1].push(s[i]) : s[i] >= 6 && s[i] <= 11 ? a[2].push(s[i]) : s[i] >= 12 && s[i] <= 17 ? a[3].push(s[i]) : s[i] >= 18 && s[i] <= 23 ? a[4].push(s[i]) : s[i] >= 24 && s[i] <= 29 ? a[5].push(s[i]) : s[i] >= 30 && s[i] <= 35 ? a[6].push(s[i]) : s[i] >= 36 && s[i] <= 41 && a[7].push(s[i]);
                    var r = {
                        key: "",
                        value: []
                    };
                    for (var o in a)
                        a[o].length > r.value.length && (r.value = a[o],
                        r.key = o);
                    return this.getNotOwnedCard(r.value, this.rangeCards(r.key))
                },
                rangeCards: function(e) {
                    return 1 == e ? {
                        start: 0,
                        end: 5
                    } : 2 == e ? {
                        start: 6,
                        end: 11
                    } : 3 == e ? {
                        start: 12,
                        end: 17
                    } : 4 == e ? {
                        start: 18,
                        end: 23
                    } : 5 == e ? {
                        start: 24,
                        end: 29
                    } : 6 == e ? {
                        start: 30,
                        end: 35
                    } : 7 == e ? {
                        start: 36,
                        end: 41
                    } : void 0
                },
                getNotOwnedCard: function(e, t) {
                    if (t) {
                        for (var a = [], s = t.start; s <= t.end; s++)
                            -1 == e.indexOf(s) && a.push(s);
                        return a[Math.floor(Math.random() * Math.floor(a.length))]
                    }
                },
                askCard: function() {
                    var e = this;
                    this.timeoutPlay && clearTimeout(this.timeoutPlay),
                    setTimeout((function() {
                        void 0 !== e.cardID ? (e.$store.gameLogic.action.fromPlayerID = e.$store.selfPlayer.playerID,
                        e.$store.gameLogic.action.toPlayerID = e.toPlayerID,
                        e.$store.gameLogic.action.cardID = e.cardID,
                        e.$store.gameLogic.action.cardName = e.$deck[e.cardID].name,
                        e.$store.gameLogic.action.cardFamily = e.$deck[e.cardID].family,
                        e.$store.gameLogic.statut = "youAskTo") : e.$store.gameLogic.deck ? e.$store.gameLogic.statut = "pickCard" : e.$store.gameLogic.statut = "emptyHand",
                        e.$store.socket.emit("card:ask", {
                            cardID: e.cardID,
                            playerID: e.toPlayerID
                        })
                    }
                    ), 250)
                }
            },
            mounted: function() {
                var e = this;
                this.$store.selfPlayer.playerIndex != this.$store.gameLogic.actualTurn || this.$store.display.gameOver || (this.timeoutPlay && clearTimeout(this.timeoutPlay),
                this.timeoutPlay = setTimeout((function() {
                    e.$store.selfPlayer.cards.length ? (e.cardID = e.selectRngCard(e.$store.selfPlayer),
                    e.toPlayerID = e.selectRngPlayer(e.$store.players, e.$store.socket.sid),
                    e.askCard()) : (e.cardID = void 0,
                    e.askCard()),
                    e.$store.display.modalYourTurn = !1
                }
                ), 1e4))
            },
            beforeDestroy: function() {
                this.timeoutPlay && clearTimeout(this.timeoutPlay)
            }
        }
          , A = j
          , D = Object(m["a"])(A, L, P, !1, null, null, null)
          , T = D.exports
          , E = {
            name: "MyPlayer",
            components: {
                Message: k,
                Bulles: p,
                ModalYourTurn: T
            },
            props: ["player"],
            data: function() {
                return {
                    cardID: 0,
                    toPlayerID: 0,
                    timeoutModal: ""
                }
            },
            methods: {
                checkGameStatus: function() {
                    var e = this
                      , t = 0;
                    return Object.keys(this.$store.players).forEach((function(a) {
                        t += e.$store.players[a].score
                    }
                    )),
                    !(t >= 7)
                }
            },
            updated: function() {
                var e = this;
                this.$store.selfPlayer.playerIndex == this.$store.gameLogic.actualTurn && (this.checkGameStatus() && "playerTurn" == this.$store.gameLogic.statut || "playerReplay" == this.$store.gameLogic.statut) ? (document.title = "C'EST VOTRE TOUR! | L'Appui - Jeu des 7 familles",
                this.timeoutModal && clearTimeout(this.timeoutModal),
                this.timeoutModal = setTimeout((function() {
                    e.$store.display.modalYourTurn = !0;
                    var t = new Audio("/sounds/your-turn.mp3");
                    t.volume = .6,
                    t.play()
                }
                ), 2e4)) : (document.title = "Partie en cours... | L'Appui - Jeu des 7 familles",
                this.timeoutModal && clearTimeout(this.timeoutModal))
            }
        }
          , F = E
          , S = Object(m["a"])(F, b, h, !1, null, null, null)
          , O = S.exports
          , M = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "my-4 text-center position-relative"
            }, [a("div", {
                staticClass: "empty-deck position-absolute rounded"
            }), a("transition-group", {
                staticClass: "stack mx-auto",
                attrs: {
                    name: e.transition,
                    tag: "div"
                }
            }, e._l(this.$store.gameLogic.deck, (function(e) {
                return a("div", {
                    key: e,
                    staticClass: "stack-wrapper position-absolute w-100 h-100"
                }, [a("div", {
                    staticClass: "stack-card border-white d-flex align-items-center justify-content-center"
                })])
            }
            )), 0), e.$store.gameLogic.deck > 0 ? a("p", {
                staticClass: "mb-0 deck-number text-white-50 font-weight-bold position-absolute"
            }, [e._v(e._s(e.$store.gameLogic.deck))]) : e._e(), a("transition", {
                attrs: {
                    name: "flipSlideDown"
                }
            }, ["newCard" == e.$store.gameLogic.statut ? a("div", {
                staticClass: "card-picked bg-white border-white position-absolute"
            }, [a("p", {
                staticClass: "mb-0 text-white card-letter border-white d-flex align-items-center justify-content-center position-absolute",
                style: "background-color:" + e.$deck[e.$store.gameLogic.action.cardID].color
            }, [e._v(" " + e._s(e.$store.gameLogic.action.cardFamily[0]) + " ")]), a("img", {
                staticClass: "img-fluid-all pt-2 py-2 pb-1",
                attrs: {
                    src: e.$deck[e.$store.gameLogic.action.cardID].image,
                    srcset: e.$deck[e.$store.gameLogic.action.cardID].image2x + " 2x",
                    alt: ""
                }
            })]) : e._e()])], 1)
        }
          , R = []
          , N = {
            name: "Stack",
            data: function() {
                return {
                    transition: "flipDown"
                }
            },
            beforeUpdate: function() {
                var e = this.$store.gameLogic.actualTurn
                  , t = this.$store.selfPlayer.myPlayerLayout;
                e === this.$store.selfPlayer.playerIndex ? this.transition = "flipDown" : e === t[2] ? this.transition = "swipeUp" : e === t[1] || e === t[0] ? this.transition = "swipeLeft" : e !== t[3] && e !== t[4] || (this.transition = "swipeRight")
            }
        }
          , q = N
          , G = Object(m["a"])(q, M, R, !1, null, null, null)
          , z = G.exports
          , B = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "modal-mask z-first bg-dark-95"
            }, [a("div", {
                staticClass: "modal-wrapper"
            }, [a("div", {
                staticClass: "modal-dialog modal-dialog-centered",
                attrs: {
                    role: "document"
                }
            }, [a("div", {
                staticClass: "modal-content bg-transparent p-0 border-0"
            }, [a("div", {
                staticClass: "bg-white rounded"
            }, [a("div", {
                staticClass: "container-fluid py-4 text-center"
            }, [e._m(0), e._m(1), e._l(e.playersSorted, (function(t, s) {
                return a("div", {
                    key: t.playerID
                }, [a("div", {
                    staticClass: "row m-0 py-2 rounded-pill align-items-center",
                    class: {
                        "bg-yellow-light mb-2": 0 == s
                    }
                }, [a("div", {
                    staticClass: "col-auto px-2"
                }, [a("img", {
                    staticClass: "rounded-circle img-fluid avatar",
                    attrs: {
                        src: "/images/avatars/Avatar" + t.avatar + ".png",
                        srcset: "/images/avatars/Avatar" + t.avatar + "@2x.png 2x",
                        alt: "",
                        width: "50px"
                    }
                })]), a("div", {
                    staticClass: "col px-2"
                }, [a("p", {
                    staticClass: "mb-0 font-weight-semibold text-yellow text-left",
                    class: [0 == s ? "text-yellow" : "text-muted"]
                }, [a("span", 0 == s ? [e._v("Bravo, " + e._s(t.playername) + " a gagné!")] : [e._v(e._s(t.playername))])])]), t.score > 0 ? a("div", {
                    staticClass: "col-auto ml-auto pr-4"
                }, [a("p", {
                    staticClass: "mb-0 rounded-sm border border-white bg-danger text-white px-2 py-1 shadow"
                }, [e._v(" " + e._s(t.score) + " ")])]) : e._e()]), 0 != s && s != Object.keys(e.$store.players).length - 1 ? a("hr", {
                    staticClass: "border-muted m-2"
                }) : e._e()])
            }
            ))], 2), a("div", {
                staticClass: "bg-primary-light px-3 py-4 rounded-bottom"
            }, [a("p", {
                staticClass: "text-center px-sm-5 mb-4"
            }, [e._v("Merci d’avoir joué au jeu des 7 familles! Si vous vous êtes retrouvé(e) dans l'une de ces familles, n'hésitez pas à contacter Info-aidant.")]), a("a", {
                staticClass: "btn btn-sm btn-light btn-block d-flex align-items-center justify-content-center",
                attrs: {
                    href: "tel:1 855 852-7784"
                },
                on: {
                    click: e.triggerCall
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_phone.svg"
                }
            }), e._v(" 1 855 852-7784 ")]), a("button", {
                staticClass: "btn btn-sm btn-light btn-block mt-3 d-flex align-items-center justify-content-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalAppui = !0
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_external_link.svg"
                }
            }), e._v(" lappui.org ")])])]), a("button", {
                staticClass: "btn btn-primary btn-block mt-3",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.restart
                }
            }, [e._v("Jouer de nouveau avec les mêmes joueurs")]), e._m(2)])])])])
        }
          , V = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12 text-center mb-4"
            }, [a("img", {
                attrs: {
                    src: "/images/gameover.png",
                    srcset: "/images/gameover@2x.png 2x",
                    alt: ""
                }
            })])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "row m-0"
            }, [a("div", {
                staticClass: "col-auto pl-2"
            }, [a("p", {
                staticClass: "font-weight-semibold small"
            }, [e._v("Joueurs")])]), a("div", {
                staticClass: "col-auto ml-auto pr-4"
            }, [a("p", {
                staticClass: "font-weight-semibold small"
            }, [e._v("Familles composées")])])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("a", {
                staticClass: "btn btn-light text-primary btn-block mt-3 d-flex align-items-center justify-content-center",
                attrs: {
                    href: "/"
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_door.svg"
                }
            }), e._v(" Quitter la partie ")])
        }
        ]
          , J = (a("07ac"),
        {
            name: "ModalGameOver",
            data: function() {
                return {
                    playersSorted: Object.values(this.$store.players)
                }
            },
            methods: {
                restart: function() {
                    this.$store.socket.emit("game:restart")
                },
                triggerCall: function() {
                    this.$gtm.trackEvent({
                        event: "telephone"
                    })
                }
            },
            mounted: function() {
                this.playersSorted.sort((function(e, t) {
                    return e.score > t.score ? -1 : t.score > e.score ? 1 : 0
                }
                ))
            }
        })
          , W = J
          , U = Object(m["a"])(W, B, V, !1, null, null, null)
          , H = U.exports
          , Y = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "modal-mask z-first bg-dark-95"
            }, [a("div", {
                staticClass: "modal-wrapper",
                on: {
                    click: function(t) {
                        if (t.target !== t.currentTarget)
                            return null;
                        e.$store.display.modalGameRestarted = !1
                    }
                }
            }, [a("div", {
                staticClass: "modal-dialog modal-dialog-centered",
                attrs: {
                    role: "document"
                }
            }, [a("div", {
                staticClass: "modal-content bg-transparent p-0 border-0"
            }, [a("div", {
                staticClass: "bg-white rounded p-4 p-md-5 text-center"
            }, [a("img", {
                staticClass: "mb-3",
                attrs: {
                    src: "/images/pictos/ic_join_game.svg",
                    alt: ""
                }
            }), a("p", {
                staticClass: "font-weight-semibold mb-1 big"
            }, [e._v(" De retour dans le jeu! ")]), a("p", {
                staticClass: "text-muted mb-4"
            }, [e._v(" Vous reprenez la partie en cours ")]), a("button", {
                staticClass: "btn btn-sm btn-primary btn-block mt-3",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalGameRestarted = !1
                    }
                }
            }, [e._v(" Continuer ")])])])])])])
        }
          , Q = []
          , K = {
            name: "ModalGameRestarted"
        }
          , X = K
          , Z = Object(m["a"])(X, Y, Q, !1, null, null, null)
          , ee = Z.exports
          , te = a("ac77")
          , ae = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "position-fixed z-top h-100 w-100 bg-dark ask-card overflow-scroll"
            }, [a("div", {
                staticClass: "container h-100"
            }, [a("div", {
                staticClass: "row h-100"
            }, [a("div", {
                staticClass: "col-12 mx-auto"
            }, [a("Header")], 1), a("div", {
                staticClass: "col-12 mx-auto mb-4"
            }, [a("div", {
                staticClass: "row tabletop-wrapper bg-info p-1"
            }, [a("div", {
                staticClass: "w-100 tabletop bg-dark border border-secondary p-4 position-relative"
            }, [a("button", {
                staticClass: "btn btn-light py-2 px-3 d-flex align-items-center mx-auto mb-4",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.gameLogic.statut = "playerTurn"
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_close.svg",
                    width: "18px",
                    height: "18px"
                }
            }), e._v(" Annuler ")]), a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12 col-md-9 col-lg-7 col-xl-6 mx-auto"
            }, [e._l(e.families, (function(t, s) {
                return a("div", {
                    key: s,
                    staticClass: "bg-white rounded mb-3 position-relative"
                }, [a("div", {
                    staticClass: "d-flex align-items-center p-3 family-dropdown rounded",
                    class: {
                        opened: e.display == t.name
                    },
                    on: {
                        click: function(a) {
                            e.display = e.display == t.name ? null : t.name
                        }
                    }
                }, [a("p", {
                    staticClass: "mb-0 px-2 py-1 text-white rounded",
                    style: "background-color:" + t.color
                }, [e._v(e._s(t.name[0]))]), a("p", {
                    staticClass: "mb-0 ml-2 font-weight-semibold"
                }, [e._v("Famille " + e._s(t.name) + " (" + e._s(Object.keys(t.cards).length) + ")")]), a("img", {
                    staticClass: "ml-auto plus",
                    attrs: {
                        src: "/images/pictos/ic_plus.svg"
                    }
                })]), a("transition", {
                    attrs: {
                        name: "expandDown"
                    }
                }, [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.display == t.name,
                        expression: "display == fam.name"
                    }],
                    staticClass: "px-3 pb-3 pt-0 rounded-bottom bg-white position-absolute w-100 cards-list"
                }, e._l(t.cards, (function(t, s) {
                    return a("button", {
                        key: s,
                        staticClass: "btn btn-outline-dark btn-block text-left mt-2 px-3 py-2 border-dark font-weight-semibold",
                        on: {
                            click: function(t) {
                                return e.askCard(s)
                            }
                        }
                    }, [e._v(" " + e._s(t.name) + " ")])
                }
                )), 0)])], 1)
            }
            )), a("div", {
                staticClass: "rounded bg-white text-center p-3 my-5"
            }, [a("p", {
                staticClass: "mb-0 font-weight-semibold message"
            }, [e._v(" Quelle carte souhaitez-vous demander à "), a("span", {
                staticClass: "text-primary"
            }, [e._v(e._s(e.$store.gameLogic.askToPlayer.playername))]), e._v("? ")])]), a("div", {
                staticClass: "row align-items-center justify-content-center my-4"
            }, [a("div", {
                staticClass: "col-auto my-2 my-sm-0"
            }, [a("p", {
                staticClass: "text-white small mb-1 text-center"
            }, [e._v(e._s(e.$store.selfPlayer.playername))]), a("div", {
                staticClass: "position-relative avatar-player d-inline-block playing"
            }, [a("img", {
                staticClass: "rounded-circle img-fluid avatar",
                attrs: {
                    src: "/images/avatars/Avatar" + e.$store.selfPlayer.avatar + ".png",
                    srcset: "/images/avatars/Avatar" + e.$store.selfPlayer.avatar + "@2x.png 2x",
                    alt: ""
                }
            }), a("div", {
                staticClass: "circle rounded-circle border-success position-absolute overflow-hidden"
            }, [a("svg", {
                staticClass: "position-absolute",
                staticStyle: {
                    "enable-background": "new 0 0 24 24"
                },
                attrs: {
                    version: "1.1",
                    id: "Calque_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 24 24",
                    "xml:space": "preserve",
                    width: "24",
                    height: "24"
                }
            }, [a("path", {
                attrs: {
                    fill: "#ff4e00",
                    d: "M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12C24,5.4,18.6,0,12,0z"
                }
            }), a("g", [a("circle", {
                attrs: {
                    fill: "#fff",
                    cx: "6.5",
                    cy: "12.5",
                    r: "1.5"
                }
            }), a("circle", {
                attrs: {
                    fill: "#fff",
                    cx: "12.5",
                    cy: "12.5",
                    r: "1.5"
                }
            }), a("circle", {
                attrs: {
                    fill: "#fff",
                    cx: "18.5",
                    cy: "12.5",
                    r: "1.5"
                }
            })])])]), a("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.$store.selfPlayer.score > 0,
                    expression: "$store.selfPlayer.score > 0"
                }],
                staticClass: "score text-white bg-danger border border-white rounded position-absolute px-1 mb-0"
            }, [e._v(" " + e._s(e.$store.selfPlayer.score) + " ")])])]), a("div", {
                staticClass: "col-auto position-relative"
            }, [a("div", {
                staticClass: "my-hand d-flex justify-content-between"
            }, e._l(e.$store.selfPlayer.cards, (function(t) {
                return a("div", {
                    key: t,
                    staticClass: "hand-card-wrapper position-relative"
                }, [a("div", {
                    staticClass: "hand-card border-white bg-white position-absolute text-center"
                }, [a("p", {
                    staticClass: "mb-0 text-white card-letter border-white d-flex align-items-center justify-content-center position-absolute",
                    style: "background-color:" + e.$deck[t].color
                }, [e._v(" " + e._s(e.$deck[t].family[0]) + " ")]), a("img", {
                    staticClass: "img-fluid-all pt-3 px-2 pb-1",
                    attrs: {
                        src: e.$deck[t].image,
                        srcset: e.$deck[t].image + " 2x",
                        alt: ""
                    }
                })])])
            }
            )), 0), a("button", {
                staticClass: "btn btn-sm btn-info my-cards-button position-absolute text-nowrap",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.mycards = !0
                    }
                }
            }, [e._v(" Consulter mes cartes ")])])])], 2)])])])])])])])
        }
          , se = []
          , ie = (a("caad"),
        a("2532"),
        a("b85c"))
          , re = {
            name: "AskCard",
            components: {
                Header: te["a"]
            },
            data: function() {
                return {
                    families: {},
                    cardsToAsk: {},
                    display: null,
                    cardID: null,
                    deck: this.$deck,
                    cards: this.$store.selfPlayer.cards
                }
            },
            beforeMount: function() {
                var e, t = this, a = Object(ie["a"])(this.cards);
                try {
                    for (a.s(); !(e = a.n()).done; ) {
                        var s = e.value;
                        this.families[this.$deck[s].family] || (this.families[this.$deck[s].family] = {},
                        this.families[this.$deck[s].family].name = this.$deck[s].family,
                        this.families[this.$deck[s].family].color = this.$deck[s].color,
                        this.families[this.$deck[s].family].cards = {})
                    }
                } catch (i) {
                    a.e(i)
                } finally {
                    a.f()
                }
                this.$deck.forEach((function(e, a) {
                    !t.cards.includes(a) && t.families[e.family] && (t.families[e.family].cards[a] = e)
                }
                ))
            },
            methods: {
                close: function() {
                    this.$emit("closeAskCard", !0)
                },
                askCard: function(e) {
                    this.cardID = e,
                    void 0 !== this.cardID ? (this.$store.gameLogic.action.fromPlayerID = this.$store.selfPlayer.playerID,
                    this.$store.gameLogic.action.toPlayerID = this.$store.gameLogic.askToPlayer.playerID,
                    this.$store.gameLogic.action.cardID = this.cardID,
                    this.$store.gameLogic.action.cardName = this.$deck[this.cardID].name,
                    this.$store.gameLogic.action.cardFamily = this.$deck[this.cardID].family,
                    this.$store.gameLogic.statut = "youAskTo") : this.$store.gameLogic.deck ? this.$store.gameLogic.statut = "pickCard" : this.$store.gameLogic.statut = "emptyHand",
                    this.$store.socket.emit("card:ask", {
                        cardID: this.cardID,
                        playerID: this.$store.gameLogic.askToPlayer.playerID
                    })
                }
            }
        }
          , oe = re
          , le = Object(m["a"])(oe, ae, se, !1, null, null, null)
          , ne = le.exports
          , ce = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "position-fixed w-100 h-100 bg-dark overflow-scroll z-first"
            }, [a("div", {
                staticClass: "bg-pattern position-fixed w-100 h-100 pointer-events-none"
            }), a("div", {
                staticClass: "container h-100"
            }, [a("div", {
                staticClass: "row h-100"
            }, [a("div", {
                staticClass: "col-12 align-self-start my-4 my-md-5"
            }, [a("button", {
                staticClass: "btn btn-light py-2 px-3 d-flex align-items-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.mycards = !1
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_close.svg",
                    alt: "Icone fermer mes cartes 7 familles Appui",
                    width: "18px",
                    height: "18px"
                }
            }), e._v(" Fermer ")])]), a("div", {
                staticClass: "col-12 mx-auto text-white"
            }, [a("h5", {
                staticClass: "font-weight-semibold text-center"
            }, [e._v("Vos cartes")]), a("p", {
                staticClass: "text-center mb-5"
            }, [e._v("Cliquez sur une carte pour avoir plus de détails")]), a("div", {
                staticClass: "row justify-content-center"
            }, e._l(e.$store.selfPlayer.cards, (function(t, s) {
                return a("div", {
                    key: s,
                    staticClass: "col mb-5",
                    on: {
                        click: function(a) {
                            e.$store.display.modalCardDetails = t
                        }
                    }
                }, [a("div", {
                    staticClass: "mycard bg-white border-white mb-3 mx-auto position-relative text-center"
                }, [a("p", {
                    staticClass: "h5 mb-0 text-white card-letter border-white d-flex align-items-center justify-content-center position-absolute",
                    style: "background-color:" + e.$deck[t].color
                }, [e._v(" " + e._s(e.$deck[t].family[0]) + " ")]), a("img", {
                    staticClass: "img-fluid-all pt-3 px-2 pb-1",
                    attrs: {
                        src: e.$deck[t].image,
                        alt: ""
                    }
                })]), a("p", {
                    staticClass: "mb-1 text-center text-primary font-weight-semibold"
                }, [e._v(" Famille " + e._s(e.$deck[t].family) + " ")]), a("p", {
                    staticClass: "mb-0 text-center text-white font-weight-semibold"
                }, [e._v(e._s(e.$deck[t].name))])])
            }
            )), 0)])])])])
        }
          , de = []
          , me = {
            name: "MyCards"
        }
          , ue = me
          , pe = Object(m["a"])(ue, ce, de, !1, null, null, null)
          , ge = pe.exports
          , ve = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "position-fixed w-100 h-100 overflow-scroll z-first"
            }, [a("div", {
                staticClass: "bg-dark-95 position-fixed w-100 h-100"
            }), a("div", {
                staticClass: "container h-100"
            }, [a("div", {
                staticClass: "row h-100"
            }, [a("div", {
                staticClass: "col-12 align-self-start"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-sm-10 col-md-8 col-lg-6 col-xl-6 mx-auto align-self-start my-4 my-md-5"
            }, [a("button", {
                staticClass: "btn btn-light py-2 px-3 d-flex align-items-center float-left",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.closeTuto
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_close.svg",
                    alt: "Icone fermer menu Appui 7 familles",
                    width: "18px",
                    height: "18px"
                }
            }), e._v(" Passer le tutoriel ")]), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [7 === e.step ? a("div", [7 === e.step ? a("button", {
                staticClass: "btn btn-light py-2 px-3 d-flex align-items-center ml-auto",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.menu = !0
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_menu.svg"
                }
            }), e._v(" Menu ")]) : e._e(), a("div", {
                staticClass: "bg-white p-3 p-md-4 mt-4 text-center rounded arrow-top-right"
            }, [7 == e.step ? a("p", {
                key: "7",
                staticClass: "mb-0"
            }, [e._v(" Grâce au menu, vous pouvez rapidement accéder aux "), a("span", {
                staticClass: "text-primary"
            }, [e._v("règles du jeu")]), e._v(", "), a("span", {
                staticClass: "text-primary"
            }, [e._v("quitter la partie")]), e._v(" et avoir accès aux "), a("span", {
                staticClass: "text-primary"
            }, [e._v("contenus additionnels")]), e._v(" proposés par le jeu. ")]) : e._e()]), a("div", {
                staticClass: "text-center widescreen-tuto-nav"
            }, [a("button", {
                staticClass: "btn btn-primary mx-auto mt-5 px-4",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.closeTuto
                }
            }, [e._v("C'est parti!")])])]) : e._e()])], 1)])]), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 === e.step,
                    expression: "step === 0"
                }],
                key: 1,
                staticClass: "col-sm-10 col-md-8 col-lg-6 col-xl-6 mx-auto align-self-middle my-4 my-md-5 text-center text-white"
            }, [a("h2", {
                staticClass: "font-weight-bold mb-3"
            }, [e._v(" Bonjour " + e._s(e.$store.selfPlayer.playername) + " et bienvenue dans le jeu des 7 familles! ")]), a("p", [e._v("Voici votre table de jeu")]), a("button", {
                staticClass: "btn btn-primary px-4",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.step = 1
                    }
                }
            }, [e._v(" Voir le tutoriel ")])]), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 !== e.step,
                    expression: "step !== 0"
                }],
                key: 2,
                staticClass: "col-12"
            }, [a("div", {
                staticClass: "row h-100"
            }, [a("div", {
                staticClass: "col-auto align-self-center ml-auto widescreen-tuto-nav"
            }, [a("button", {
                staticClass: "btn btn-sm btn-light mb-5",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.step--
                    }
                }
            }, [e._v("Retour")])]), a("div", {
                staticClass: "col-sm-10 col-md-8 col-lg-6 col-xl-6 mx-auto align-self-middle mb-4 mb-md-5 text-center"
            }, [a("div", {
                staticClass: "row h-100"
            }, [a("div", {
                staticClass: "col-12"
            }, [a("div", {
                staticClass: "tuto-wrapper"
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.step < 6,
                    expression: "step < 6"
                }],
                key: 1,
                staticClass: "row align-items-center"
            }, [a("div", {
                staticClass: "col-4"
            }, [a("div", {
                staticClass: "row h-100"
            }, [a("div", {
                staticClass: "col-12 align-items-center d-flex justify-content-center"
            }, [a("TutoPlayer", {
                attrs: {
                    position: "left",
                    avatar: "5",
                    play: e.step <= 4,
                    askTo: e.step,
                    ask: 1 == e.step || 3 == e.step
                }
            }), a("transition", {
                attrs: {
                    name: "tutoGiveCard"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.step >= 2,
                    expression: "step >= 2"
                }],
                staticClass: "card-tuto border-white position-absolute"
            })])], 1), a("div", {
                staticClass: "col-12 align-items-end d-flex justify-content-center"
            }, [a("TutoPlayer", {
                attrs: {
                    position: "left",
                    avatar: "3",
                    draw: 4 == e.step
                }
            })], 1)])]), a("div", {
                staticClass: "col-4"
            }, [a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 4 == e.step,
                    expression: "step == 4"
                }],
                staticClass: "my-4 text-center"
            }, [a("transition-group", {
                staticClass: "stack mx-auto",
                attrs: {
                    name: "swipeLeftDelayed",
                    tag: "div"
                }
            }, e._l(10 - e.step, (function(e) {
                return a("div", {
                    key: e,
                    staticClass: "stack-wrapper position-absolute w-100 h-100"
                }, [a("div", {
                    staticClass: "stack-card border-white"
                })])
            }
            )), 0)], 1)])], 1), a("div", {
                staticClass: "col-4"
            }, [a("div", {
                staticClass: "row h-100"
            }, [a("div", {
                staticClass: "col-12 align-items-center d-flex justify-content-center"
            }, [a("TutoPlayer", {
                attrs: {
                    avatar: "4",
                    position: "right",
                    play: 5 == e.step,
                    askTo: e.step,
                    ask: 5 == e.step
                }
            })], 1), a("div", {
                staticClass: "col-12 align-items-center d-flex justify-content-center"
            }, [a("TutoPlayer", {
                attrs: {
                    avatar: "1",
                    position: "right",
                    card: 2 == e.step
                }
            })], 1)])])]), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 6 == e.step,
                    expression: "step == 6"
                }],
                key: 2,
                staticClass: "bg-white rounded"
            }, [e._m(0)])])]), a("div", {
                staticClass: "col-12 align-self-end"
            }, [a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [a("div", {
                staticClass: "message-wrapper mt-4"
            }, [e.step < 7 ? a("div", {
                staticClass: "bg-white p-3 p-md-4 text-center rounded arrow-top-center shadow-sm"
            }, [a("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [1 == e.step ? a("p", {
                key: "1",
                staticClass: "mb-0"
            }, [e._v(" À chaque manche, le joueur dont c’est le tour demande à un autre joueur une carte appartenant à une famille qu’il souhaite compléter dans sa main. ")]) : e._e(), 2 == e.step ? a("p", {
                key: "2",
                staticClass: "mb-0"
            }, [e._v(" Si l’autre joueur possède la carte demandée, "), a("span", {
                staticClass: "text-primary"
            }, [e._v("il doit la céder.")])]) : e._e(), 3 == e.step ? a("p", {
                key: "3",
                staticClass: "mb-0"
            }, [a("span", {
                staticClass: "text-primary"
            }, [e._v("Aussi longtemps que le joueur reçoit les cartes demandées")]), e._v(", son tour continue. ")]) : e._e(), 4 == e.step ? a("p", {
                key: "4",
                staticClass: "mb-0"
            }, [e._v(" Si l’autre joueur ne possède pas la carte demandée, le joueur qui a demandé la carte "), a("span", {
                staticClass: "text-primary"
            }, [e._v("pige une carte dans la pioche.")])]) : e._e(), 5 == e.step ? a("p", {
                key: "5",
                staticClass: "mb-0"
            }, [a("span", {
                staticClass: "text-primary"
            }, [e._v("Son tour se termine")]), e._v(" et c’est au tour du joueur suivant. ")]) : e._e(), 6 == e.step ? a("p", {
                key: "6",
                staticClass: "mb-0"
            }, [a("span", {
                staticClass: "text-primary"
            }, [e._v("Le joueur ayant complété le plus de familles")]), e._v(" remporte la partie! ")]) : e._e()])], 1) : e._e()])]), a("div", {
                staticClass: "tuto-nav-wrapper mt-sm-3 mt-lg-4 mt-xl-5"
            }, [a("div", {
                staticClass: "row align-items-center"
            }, [a("div", {
                staticClass: "col-auto text-left pr-0",
                staticStyle: {
                    width: "100px"
                }
            }, [a("button", {
                staticClass: "btn btn-sm btn-link p-0 mt-3 text-white",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.step--
                    }
                }
            }, [e._v("Retour")])]), a("div", {
                staticClass: "col px-0"
            }, [a("div", {
                staticClass: "tuto-nav"
            }, e._l(7, (function(t) {
                return a("button", {
                    key: t,
                    class: {
                        "tns-nav-active": e.step == t
                    },
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(a) {
                            e.step = t
                        }
                    }
                })
            }
            )), 0)]), a("div", {
                staticClass: "col-auto text-right pl-0",
                staticStyle: {
                    width: "100px"
                }
            }, [e.step < 7 ? a("button", {
                staticClass: "btn btn-sm btn-link p-0 pl-2 mt-3 text-white",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.step++
                    }
                }
            }, [e._v("Suivant")]) : a("button", {
                staticClass: "btn btn-sm btn-link p-0 mt-3 text-white",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.closeTuto
                }
            }, [e._v("C'est parti!")])])])])], 1)])]), a("div", {
                staticClass: "col-auto align-self-center mr-auto widescreen-tuto-nav"
            }, [e.step < 7 ? a("button", {
                staticClass: "btn btn-sm btn-light mb-5",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.step++
                    }
                }
            }, [e._v("Suivant")]) : e._e()])])])])])])
        }
          , ye = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "container-fluid py-4 text-center"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12 text-center mb-4"
            }, [a("img", {
                attrs: {
                    src: "/images/gameover.png",
                    srcset: "/images/gameover@2x.png 2x",
                    alt: ""
                }
            })])]), a("div", {
                staticClass: "row m-0"
            }, [a("div", {
                staticClass: "col-auto pl-2"
            }, [a("p", {
                staticClass: "font-weight-semibold small"
            }, [e._v("Joueurs")])]), a("div", {
                staticClass: "col-auto ml-auto pr-4"
            }, [a("p", {
                staticClass: "font-weight-semibold small"
            }, [e._v("Familles composées")])])]), a("div", [a("div", {
                staticClass: "row m-0 py-2 rounded-pill align-items-center bg-yellow-light mb-2"
            }, [a("div", {
                staticClass: "col-auto px-2"
            }, [a("img", {
                staticClass: "rounded-circle img-fluid avatar",
                attrs: {
                    src: "/images/avatars/Avatar4.png",
                    srcset: "/images/avatars/Avatar4@2x.png 2x",
                    alt: "",
                    width: "50px"
                }
            })]), a("div", {
                staticClass: "col px-2"
            }, [a("p", {
                staticClass: "mb-0 font-weight-semibold text-yellow text-left text-yellow"
            }, [e._v(" Bravo, Andreanne a gagné! ")])]), a("div", {
                staticClass: "col-auto ml-auto pr-4"
            }, [a("p", {
                staticClass: "mb-0 rounded-sm border border-white bg-danger text-white px-2 py-1 shadow"
            }, [e._v(" 4 ")])])]), a("div", {
                staticClass: "row m-0 py-2 rounded-pill align-items-center mb-2"
            }, [a("div", {
                staticClass: "col-auto px-2"
            }, [a("img", {
                staticClass: "rounded-circle img-fluid avatar",
                attrs: {
                    src: "/images/avatars/Avatar5.png",
                    srcset: "/images/avatars/Avatar5@2x.png 2x",
                    alt: "",
                    width: "50px"
                }
            })]), a("div", {
                staticClass: "col px-2"
            }, [a("p", {
                staticClass: "mb-0 font-weight-semibold text-muted text-left text-yellow"
            }, [e._v(" Johannie ")])]), a("div", {
                staticClass: "col-auto ml-auto pr-4"
            }, [a("p", {
                staticClass: "mb-0 rounded-sm border border-white bg-danger text-white px-2 py-1 shadow"
            }, [e._v(" 2 ")])])])])])
        }
        ]
          , fe = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "text-center row mx-0 align-items-end justify-content-center w-100"
            }, [a("div", {
                staticClass: "ml-2 mr-2 ml-md-3 mr-md-3"
            }, [a("div", {
                staticClass: "position-relative avatar-player tuto-avatar-player d-inline-block playing"
            }, [a("img", {
                staticClass: "rounded-circle img-fluid avatar",
                attrs: {
                    src: "/images/avatars/Avatar" + e.avatar + ".png",
                    srcset: "/images/avatars/Avatar" + e.avatar + "@2x.png 2x",
                    alt: ""
                }
            }), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [e.play ? a("div", {
                staticClass: "circle rounded-circle border-warning position-absolute overflow-hidden"
            }, [a("svg", {
                staticClass: "position-absolute",
                staticStyle: {
                    "enable-background": "new 0 0 24 24"
                },
                attrs: {
                    version: "1.1",
                    id: "Calque_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 24 24",
                    "xml:space": "preserve",
                    width: "24",
                    height: "24"
                }
            }, [a("path", {
                attrs: {
                    fill: "#ff4e00",
                    d: "M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12C24,5.4,18.6,0,12,0z"
                }
            }), a("g", [a("circle", {
                attrs: {
                    fill: "#fff",
                    cx: "6.5",
                    cy: "12.5",
                    r: "1.5"
                }
            }), a("circle", {
                attrs: {
                    fill: "#fff",
                    cx: "12.5",
                    cy: "12.5",
                    r: "1.5"
                }
            }), a("circle", {
                attrs: {
                    fill: "#fff",
                    cx: "18.5",
                    cy: "12.5",
                    r: "1.5"
                }
            })])])]) : e._e()]), a("div", [a("transition", {
                attrs: {
                    name: "growUp"
                }
            }, [e.card ? a("div", {
                staticClass: "bulle bg-white rounded-circle position-absolute",
                class: e.position
            }, [a("img", {
                attrs: {
                    src: "/images/pictos/ic_check.svg",
                    alt: "",
                    width: "40px"
                }
            })]) : e._e()]), a("transition", {
                attrs: {
                    name: "growUp"
                }
            }, [e.draw ? a("div", {
                staticClass: "bulle bg-white rounded-circle position-absolute",
                class: e.position
            }, [a("img", {
                attrs: {
                    src: "/images/pictos/ic_cancel.svg"
                }
            })]) : e._e()]), a("transition", {
                attrs: {
                    name: "growUp"
                }
            }, [e.ask ? a("div", {
                staticClass: "bulle-square position-absolute",
                class: e.position
            }, [a("div", {
                staticClass: "box-square-content bg-white rounded p-3 d-flex align-items-center justify-content-between",
                class: "float-" + e.position
            }, [a("img", {
                staticClass: "rounded-circle img-fluid avatar",
                attrs: {
                    src: "/images/avatars/Avatar" + e.toAvatar + ".png",
                    srcset: "/images/avatars/Avatar" + e.toAvatar + "@2x.png 2x"
                }
            }), a("p", {
                staticClass: "ml-2 mb-0 p-1 text-white h2 rounded",
                style: "width:46px;background-color:" + e.$deck[e.cardId].color
            }, [e._v(e._s(e.$deck[e.cardId].family[0]))]), a("p", {
                staticClass: "ml-2 mb-0 font-weight-semibold"
            }, [e._v(e._s(e.$deck[e.cardId].name) + " ?")])])]) : e._e()])], 1)], 1)])])
        }
          , be = []
          , he = {
            name: "TutoPlayer",
            props: ["play", "avatar", "ask", "askTo", "card", "draw", "position"],
            components: {},
            data: function() {
                return {
                    toAvatar: this.askTo,
                    cardId: Math.floor(Math.random() * Math.floor(41)) + 1
                }
            },
            beforeUpdate: function() {
                this.toAvatar = this.askTo,
                this.cardId = Math.floor(Math.random() * Math.floor(41)) + 1
            }
        }
          , _e = he
          , Ce = Object(m["a"])(_e, fe, be, !1, null, null, null)
          , xe = Ce.exports
          , we = {
            name: "Tutorial",
            components: {
                TutoPlayer: xe
            },
            data: function() {
                return {
                    step: 0,
                    myPlayerLayout: ["0", 0, 0, 1, 2],
                    players: [{
                        playername: "Brandon Cormier",
                        playerID: "bot-3",
                        socketID: "",
                        playerIndex: 3,
                        avatar: 3,
                        bot: !1,
                        reserved: !1,
                        cards: [],
                        score: 0
                    }, {
                        playername: "Jonathan Comeau",
                        playerID: "bot-4",
                        socketID: "",
                        playerIndex: 4,
                        avatar: 12,
                        bot: !1,
                        reserved: !1,
                        cards: [],
                        score: 0
                    }, {
                        playername: "Maxim Le",
                        playerID: "bot-5",
                        socketID: "",
                        playerIndex: 5,
                        avatar: 3,
                        bot: !1,
                        reserved: !1,
                        cards: [],
                        score: 0
                    }]
                }
            },
            mounted: function() {},
            methods: {
                closeTuto: function() {
                    this.$store.display.tutorial = !1,
                    sessionStorage.setItem("tutorialClosed", !0)
                }
            }
        }
          , $e = we
          , ke = Object(m["a"])($e, ve, ye, !1, null, null, null)
          , Le = ke.exports
          , Pe = a("c2b4")
          , Ie = a.n(Pe)
          , je = {
            name: "Game",
            components: {
                Player: f,
                MyPlayer: O,
                Header: te["a"],
                Stack: z,
                AskCard: ne,
                ModalGameOver: H,
                ModalGameRestarted: ee,
                MyCards: ge,
                Tutorial: Le
            },
            data: function() {
                return {
                    store: this.$store,
                    deck: this.$deck,
                    myPlayerLayout: this.$store.selfPlayer.myPlayerLayout,
                    showAskCard: !1
                }
            },
            created: function() {
                var e = this;
                if (sessionStorage.getItem("tutorialClosed") ? "true" == sessionStorage.getItem("tutorialClosed") && (this.$store.display.tutorial = !1) : sessionStorage.setItem("tutorialClosed", !1),
                localStorage.setItem("started", !0),
                !this.$store.selfPlayer.playername) {
                    var t = localStorage.getItem("lastParty");
                    window.location.replace("/" + t)
                }
                function a() {
                    var e = new Audio("/sounds/card-sound.mp3");
                    e.volume = 0,
                    e.play(),
                    document.body.removeEventListener("click", a),
                    document.body.removeEventListener("touchstart", a)
                }
                setTimeout((function() {
                    e.$store.gameLogic.statut = "playerTurn",
                    Ie()({
                        scrollableDomEle: window,
                        direction: "bottom",
                        duration: 1e3,
                        easingPreset: "easeInOutCubic"
                    })
                }
                ), 2500),
                document.body.addEventListener("click", a, {
                    passive: !0
                }),
                document.body.addEventListener("touchstart", a, {
                    passive: !0
                })
            },
            destroyed: function() {
                this.$store.socket.emit("disconnect")
            }
        }
          , Ae = je
          , De = Object(m["a"])(Ae, s, i, !1, null, null, null);
        t["a"] = De.exports
    },
    "3dfd": function(e, t, a) {
        "use strict";
        var s = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                attrs: {
                    id: "app"
                }
            }, [a("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [a("router-view")], 1), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [e.$store.display.modalPlayerLeave ? a("ModalPlayerLeave") : e._e()], 1), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [e.$store.display.rules ? a("Rules") : e._e()], 1), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [e.$store.display.about ? a("About") : e._e()], 1), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [e.$store.display.families ? a("Families") : e._e()], 1), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [!1 !== e.$store.display.modalCardDetails ? a("ModalCardDetails") : e._e()], 1), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [a("ModalGameDeleted", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.$store.display.modalGameDeleted,
                    expression: "$store.display.modalGameDeleted"
                }]
            })], 1), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [a("ModalAppui", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.$store.display.modalAppui,
                    expression: "$store.display.modalAppui"
                }]
            })], 1), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [a("ModalLeave", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.$store.display.modalLeave,
                    expression: "$store.display.modalLeave"
                }]
            })], 1)], 1)
        }
          , i = []
          , r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "position-fixed w-100 h-100 bg-dark overflow-scroll z-first"
            }, [a("div", {
                staticClass: "bg-pattern position-fixed w-100 h-100 pointer-events-none"
            }), a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12 mx-auto align-self-start my-4 my-md-5"
            }, [a("button", {
                staticClass: "btn btn-light py-2 px-3 d-flex align-items-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.rules = !1
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_close.svg",
                    alt: "Icone fermer menu Appui 7 familles",
                    width: "18px",
                    height: "18px"
                }
            }), e._v(" Fermer ")])])])]), e._m(0)]), a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12"
            }, [a("div", {
                staticClass: "bg-white rounded-lg p-4 p-md-5 mb-5"
            }, [a("p", {
                staticClass: "font-weight-semibold h5 mb-5"
            }, [e._v("Liste des familles")]), e._l(e.families, (function(t, s) {
                return a("div", {
                    key: s
                }, [a("p", {
                    staticClass: "font-weight-semibold big"
                }, [e._v("Famille " + e._s(t.name))]), a("div", {
                    staticClass: "row flex-nowrap pt-3 overflow-x-scroll"
                }, e._l(t.cards, (function(t, s) {
                    return a("div", {
                        key: s,
                        staticClass: "col text-center"
                    }, [a("div", {
                        staticClass: "mycard rounded border border-white mb-3",
                        on: {
                            click: function(t) {
                                e.$store.display.modalCardDetails = s
                            }
                        }
                    }, [a("p", {
                        staticClass: "mb-0 text-white card-letter border-white d-flex align-items-center justify-content-center position-absolute",
                        style: "background-color:" + t.color
                    }, [e._v(" " + e._s(t.family[0]) + " ")]), a("img", {
                        staticClass: "img-fluid-all pt-2 px-2 pb-1",
                        attrs: {
                            src: t.image,
                            srcset: t.image2x + " 2x",
                            alt: "Illustration " + t.name + " jeu 7 familles Appui"
                        }
                    })]), a("p", [e._v(e._s(t.name))])])
                }
                )), 0)])
            }
            ))], 2)])])])])
        }
          , o = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "col-12 col-md-12 col-lg-8 mx-auto text-white mb-5"
            }, [a("h5", {
                staticClass: "mb-4 font-weight-semibold"
            }, [e._v("Règles du jeu")]), a("p", [e._v("Les 7 familles se joue de 2 à 6 joueurs.")]), a("p", [e._v("Le but du jeu des 7 familles est d’être le joueur ayant, à la fin de la partie, réussi à réunir le plus de familles complètes.")]), a("p", [e._v("Le jeu est composé de 42 cartes pour 7 familles.")]), a("p", [e._v("1 - Chaque joueur reçoit 6 cartes. Le reste des cartes est placé au centre et fait office de pioche.")]), a("p", [e._v("2 - Le joueur dont c'est le tour demande une carte à la personne de son choix. Attention, il ne peut demander une carte d’une famille seulement s’il en possède déjà une dans son jeu.")]), a("p", [e._v("3 - Si l'autre joueur possède la carte demandée, il la cède. Aussi longtemps que le joueur reçoit les cartes demandées, son tour continue et il peut demander une nouvelle carte à un joueur.")]), a("p", [e._v("4 - Si l'autre joueur ne possède pas la carte demandée, la personne qui jouait pige une carte dans la pioche. Si elle pige la carte qu’elle souhaitait, elle peut rejouer. Sinon, son tour se termine et c’est le tour du joueur suivant.")]), a("p", [e._v("5 - Dès qu’un joueur réunit une famille, il la pose devant lui et il poursuit son tour. S’il n’a plus de carte en main après avoir formé la famille, il peut piocher puis poursuivre son tour. S’il n’y a plus de carte à piocher, son tour se termine.")]), a("p", [e._v("6 - La partie s’arrête quand toutes les familles sont complétées.")]), a("p", [e._v("Le joueur ayant complété le plus de familles remporte la partie!")])])
        }
        ]
          , l = (a("b0c0"),
        {
            name: "Rules",
            data: function() {
                return {
                    families: {}
                }
            },
            beforeMount: function() {
                for (var e in this.$deck)
                    this.families[this.$deck[e].family] || (this.families[this.$deck[e].family] = {},
                    this.families[this.$deck[e].family].cards = {}),
                    this.families[this.$deck[e].family].name = this.$deck[e].family,
                    this.families[this.$deck[e].family].color = this.$deck[e].color,
                    this.families[this.$deck[e].family].cards[e] = this.$deck[e]
            },
            mounted: function() {
                this.$gtm.trackEvent({
                    event: "regles"
                })
            }
        })
          , n = l
          , c = a("2877")
          , d = Object(c["a"])(n, r, o, !1, null, null, null)
          , m = d.exports
          , u = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "position-fixed z-first"
            }, [a("div", {
                staticClass: "position-fixed w-100 h-100 bg-dark overflow-scroll"
            }, [a("div", {
                staticClass: "bg-pattern position-fixed w-100 h-100 pointer-events-none"
            }), a("div", {
                staticClass: "container-fluid h-100"
            }, [a("div", {
                staticClass: "row h-100"
            }, [a("div", {
                staticClass: "col-12"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto align-self-start my-4 my-md-5"
            }, [a("button", {
                staticClass: "btn btn-light py-2 px-3 d-flex align-items-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.about = !1
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_close.svg",
                    alt: "Icone fermer menu Appui 7 familles",
                    width: "18px",
                    height: "18px"
                }
            }), e._v(" Fermer ")])])])])]), a("div", {
                staticClass: "col-12 align-self-center"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto text-white mb-4 mb-md-5"
            }, [a("h5", {
                staticClass: "mb-4 font-weight-semibold"
            }, [e._v("À propos du projet")]), e._m(0), e._m(1), e._m(2), a("p", [e._v(" Promoteur : "), a("a", {
                attrs: {
                    href: "https://www.lappui.org/",
                    target: "_blank",
                    rel: "nofollow noopener"
                },
                on: {
                    click: e.goToAppui
                }
            }, [e._v("L'Appui pour les proches aidants")]), a("br"), e._v(" Illustrateur : "), a("a", {
                attrs: {
                    href: "http://michelrabagliati.com/",
                    target: "_blank",
                    rel: "nofollow noopener"
                }
            }, [e._v("Michel Rabagliati")]), a("br"), e._v(" Concepteur : "), a("a", {
                attrs: {
                    href: "http://winkstrategies.com/",
                    target: "_blank",
                    rel: "nofollow noopener"
                }
            }, [e._v("Wink Stratégies")])])])])])]), a("div", {
                staticClass: "col-12 align-self-end bg-primary-light"
            }, [a("div", {
                staticClass: "row mx-0"
            }, [a("div", {
                staticClass: "col-12 align-self-end"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container py-4"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto"
            }, [a("p", {
                staticClass: "text-center"
            }, [e._v("Si vous vous êtes retrouvé(e) dans l'une de ces familles, n'hésitez pas à contacter Info-aidant.")]), a("a", {
                staticClass: "btn btn-sm btn-light btn-block d-flex align-items-center justify-content-center",
                attrs: {
                    href: "tel:1 855 852-7784"
                },
                on: {
                    click: e.triggerCall
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_phone.svg",
                    alt: "Téléphone Appui proche aidants",
                    width: "18px",
                    height: "18px"
                }
            }), e._v(" 1 855 852-7784 ")]), a("button", {
                staticClass: "btn btn-sm btn-light btn-block mt-3 d-flex align-items-center justify-content-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalAppui = !0
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_external_link.svg",
                    alt: "Icone Lien Appui proches aidants",
                    width: "18px",
                    height: "18px"
                }
            }), e._v(" lappui.org ")]), e._m(3)])])])])])])])])])])])
        }
          , p = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("p", [e._v("Les 7 familles sont autant d’occasions de "), a("strong", [e._v("montrer un vécu de proche aidant :")]), e._v(" génération sandwich, conciliation travail-famille, solitude, dégradation cyclique de l'état de santé… Suffisamment concrètes, ces situations basées sur des données statistiques visent à "), a("strong", [e._v("permettre aux personnes qui ne se savent pas proches aidantes de se reconnaître et de chercher de l’aide si elles le souhaitent.")]), e._v(" Ce jeu vise également à apporter douceur et joie aux familles concernées à travers de bons moments passés ensemble.")])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("p", [e._v("Ce jeu a été créé par l’"), a("strong", [e._v("Appui pour les proches aidants.")]), e._v(" Organisme sans but lucratif, l’Appui pour les proches aidants "), a("strong", [e._v("contribue à améliorer la qualité de vie des proches aidants et à faciliter leur quotidien.")]), e._v(" Chapeauté par l’Appui, "), a("strong", [e._v("Info-aidant")]), e._v(" est un service professionnel qui apporte écoute, information et références aux proches aidants. Il est confidentiel, gratuit et accessible partout au Québec afin d’accompagner un maximum de personnes. En 2019, environ 20 000 interventions ont été réalisées.")])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12"
            }, [a("img", {
                staticClass: "float-left mr-3 mb-3",
                attrs: {
                    src: "/images/rabagliati.jpg",
                    srcset: "/images/rabagliati@2x.jpg 2x",
                    alt: "Pierre Rabagliati dessinateur Appui 7 familles",
                    width: "120px",
                    height: "180px"
                }
            }), a("p", [e._v("Le dessinateur : "), a("strong", [e._v("Michel Rabagliati")]), a("br"), e._v(" L’Appui collabore avec Michel Rabagliati afin d’offrir un visage aux différents personnages des familles. Auteur et illustrateur québécois de bande dessinée, il est notamment connu pour sa série Paul. Ayant lui-même été proche aidant, il a abordé le thème de la proche aidance à plusieurs reprises.")])])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "my-4 text-center"
            }, [a("p", {
                staticClass: "mb-1 font-weight-light"
            }, [e._v("Présenté par :")]), a("img", {
                attrs: {
                    src: "/images/logodesjardinsvert.svg",
                    alt: ""
                }
            })])
        }
        ]
          , g = {
            name: "About",
            mounted: function() {
                this.$gtm.trackEvent({
                    event: "a-propos"
                })
            },
            methods: {
                goToAppui: function() {
                    this.$gtm.trackEvent({
                        event: "site"
                    })
                },
                triggerCall: function() {
                    this.$gtm.trackEvent({
                        event: "telephone"
                    })
                }
            }
        }
          , v = g
          , y = Object(c["a"])(v, u, p, !1, null, null, null)
          , f = y.exports
          , b = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "position-fixed z-first"
            }, [a("div", {
                staticClass: "position-fixed w-100 h-100 bg-dark overflow-scroll"
            }, [a("div", {
                staticClass: "bg-pattern position-fixed w-100 h-100 pointer-events-none"
            }), a("div", {
                staticClass: "container-fluid h-100"
            }, [a("div", {
                staticClass: "row h-100"
            }, [a("div", {
                staticClass: "col-12"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12 col-lg-10 col-xl-8 mx-auto"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12 my-4 my-md-5"
            }, [a("button", {
                staticClass: "btn btn-light py-2 px-3 d-flex align-items-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.families = !1
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_close.svg",
                    alt: "Icone ferme familles jeu Appui",
                    width: "18px",
                    height: "18px"
                }
            }), e._v(" Fermer ")])])]), e._m(0), a("div", {
                staticClass: "row mb-5"
            }, [a("div", {
                staticClass: "col-12"
            }, e._l(e.families, (function(t, s) {
                return a("div", {
                    key: s,
                    staticClass: "tabletop-wrapper bg-info p-1 mb-3 text-white"
                }, [a("div", {
                    staticClass: "tabletop p-4 w-100"
                }, [a("div", {
                    staticClass: "d-flex align-items-center familyList-dropdown rounded btn btn-link btn-block text-white p-0",
                    class: {
                        opened: e.display == t.name
                    },
                    on: {
                        click: function(a) {
                            e.display = e.display == t.name ? null : t.name
                        }
                    }
                }, [a("p", {
                    staticClass: "mb-0 font-weight-semibold h5"
                }, [e._v("Famille " + e._s(t.name))]), a("img", {
                    staticClass: "ml-auto plus",
                    attrs: {
                        src: "/images/pictos/ic_plus_white.svg",
                        alt: "Icone plus 7 familles Appui"
                    }
                })]), a("transition", {
                    attrs: {
                        name: "growDownRel"
                    }
                }, [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.display == t.name,
                        expression: "display == fam.name"
                    }]
                }, [a("div", {
                    staticClass: "row"
                }, e._l(t.cards, (function(t, s) {
                    return a("div", {
                        key: s,
                        staticClass: "mt-5 mb-3 col-12 col-md-6"
                    }, [a("div", {
                        staticClass: "row align-items-center"
                    }, [a("div", {
                        staticClass: "col-auto"
                    }, [a("div", {
                        staticClass: "family-card rounded border border-white bg-white text-center position-relative"
                    }, [a("p", {
                        staticClass: "h5 mb-0 text-white card-letter border-white d-flex align-items-center justify-content-center position-absolute",
                        style: "background-color:" + t.color
                    }, [e._v(" " + e._s(t.family[0]) + " ")]), a("img", {
                        staticClass: "img-fluid-all px-2 pt-3 pb-1",
                        attrs: {
                            src: t.image,
                            srcset: t.image2x + " 2x",
                            alt: "Illustration " + t.name + " jeu 7 familles Appui"
                        }
                    })])]), a("div", {
                        staticClass: "col"
                    }, [a("h4", [e._v(e._s(t.name))])])]), a("p", {
                        staticClass: "mt-4"
                    }, [e._v(e._s(t.description))])])
                }
                )), 0)])])], 1)])
            }
            )), 0)])])])])])]), a("div", {
                staticClass: "col-12 align-self-end bg-primary-light"
            }, [a("div", {
                staticClass: "row mx-0"
            }, [a("div", {
                staticClass: "col-12 align-self-end"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "container py-4"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto"
            }, [a("p", {
                staticClass: "text-center"
            }, [e._v("Si vous vous êtes retrouvé(e) dans l'une de ces familles, n'hésitez pas à contacter Info-aidant.")]), a("a", {
                staticClass: "btn btn-sm btn-light btn-block d-flex align-items-center justify-content-center",
                attrs: {
                    href: "tel:1 855 852-7784"
                },
                on: {
                    click: e.triggerCall
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_phone.svg",
                    alt: "Téléphone Appui proches aidants",
                    width: "18px",
                    height: "18px"
                }
            }), e._v(" 1 855 852-7784 ")]), a("button", {
                staticClass: "btn btn-sm btn-light btn-block mt-3 d-flex align-items-center justify-content-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalAppui = !0
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_external_link.svg",
                    alt: "Icone lien externe Appui.org",
                    width: "18px",
                    height: "18px"
                }
            }), e._v(" lappui.org ")])])])])])])])])])])])])
        }
          , h = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12 mb-4 text-white text-center"
            }, [a("h5", {
                staticClass: "mb-4 font-weight-semibold"
            }, [e._v("Tableau des familles")]), a("p", {
                staticClass: "big"
            }, [e._v("Retrouvez toutes les familles ainsi que leurs membres")])])])
        }
        ]
          , _ = {
            name: "Families",
            data: function() {
                return {
                    families: {},
                    display: null
                }
            },
            beforeMount: function() {
                for (var e in this.$deck)
                    this.families[this.$deck[e].family] || (this.families[this.$deck[e].family] = {},
                    this.families[this.$deck[e].family].cards = {}),
                    this.families[this.$deck[e].family].name = this.$deck[e].family,
                    this.families[this.$deck[e].family].color = this.$deck[e].color,
                    this.families[this.$deck[e].family].cards[e] = this.$deck[e]
            },
            mounted: function() {
                this.$gtm.trackEvent({
                    event: "tableau-famillesr"
                })
            },
            methods: {
                triggerCall: function() {
                    this.$gtm.trackEvent({
                        event: "telephone"
                    })
                }
            }
        }
          , C = _
          , x = Object(c["a"])(C, b, h, !1, null, null, null)
          , w = x.exports
          , $ = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "modal-mask bg-dark-95"
            }, [a("div", {
                staticClass: "modal-wrapper"
            }, [a("div", {
                staticClass: "modal-dialog modal-dialog-centered",
                attrs: {
                    role: "document"
                }
            }, [a("div", {
                staticClass: "modal-content bg-transparent p-0 border-0"
            }, [a("div", {
                staticClass: "bg-white rounded p-4 p-md-5 text-center"
            }, [a("img", {
                staticClass: "mb-3",
                attrs: {
                    src: "/images/pictos/ic_game_deleted.svg",
                    alt: "Icone partie supprimée Appui 7 familles",
                    width: "48.08px",
                    height: "49.98px"
                }
            }), a("p", {
                staticClass: "font-weight-semibold mb-1 big"
            }, [e._v(" La partie a été supprimée ")]), a("p", {
                staticClass: "text-muted mb-4"
            }, [e._v(" Cette partie n'existe plus. Vous pouvez en créer une nouvelle pour rejouer! ")]), a("a", {
                staticClass: "btn btn-sm btn-primary btn-block mt-3",
                attrs: {
                    href: "/"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalGameDeleted = !1
                    }
                }
            }, [e._v(" Créer une nouvelle partie ")])])])])])])
        }
          , k = []
          , L = {
            name: "ModalGameDeleted"
        }
          , P = L
          , I = Object(c["a"])(P, $, k, !1, null, null, null)
          , j = I.exports
          , A = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "modal-mask z-first bg-dark-95"
            }, [a("div", {
                staticClass: "modal-wrapper",
                on: {
                    click: function(t) {
                        if (t.target !== t.currentTarget)
                            return null;
                        e.$store.display.modalPlayerLeave = !1
                    }
                }
            }, [a("div", {
                staticClass: "modal-dialog modal-dialog-centered",
                attrs: {
                    role: "document"
                }
            }, [a("div", {
                staticClass: "modal-content bg-transparent p-0 border-0"
            }, [a("div", {
                staticClass: "bg-white rounded p-4 p-md-5 text-center"
            }, [a("div", {
                staticClass: "mb-3"
            }, [a("img", {
                staticClass: "rounded-circle img-fluid avatar",
                attrs: {
                    src: "/images/avatars/Avatar" + e.$store.players[e.$store.display.modalPlayerLeave].avatar + ".png",
                    srcset: "/images/avatars/Avatar" + e.$store.players[e.$store.display.modalPlayerLeave].avatar + "@2x.png 2x",
                    alt: ""
                }
            }), a("img", {
                staticClass: "position-relative",
                staticStyle: {
                    left: "-10px"
                },
                attrs: {
                    src: "/images/pictos/ic_arrow_right.svg",
                    alt: ""
                }
            })]), a("p", {
                staticClass: "font-weight-semibold mb-1 big"
            }, [e._v(" " + e._s(e.$store.players[e.$store.display.modalPlayerLeave].playername) + " à quitté la partie ")]), a("p", {
                staticClass: "text-muted mb-4"
            }, [e._v(" Ce joueur est remplacé par l'ordinateur ")]), a("button", {
                staticClass: "btn btn-sm btn-primary btn-block mt-3",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalPlayerLeave = !1
                    }
                }
            }, [e._v(" Continuer ")])])])])])])
        }
          , D = []
          , T = {
            name: "ModalPlayerLeave",
            data: function() {
                return {
                    playername: "test"
                }
            }
        }
          , E = T
          , F = Object(c["a"])(E, A, D, !1, null, null, null)
          , S = F.exports
          , O = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "modal-mask z-first bg-dark-95"
            }, [a("div", {
                staticClass: "modal-wrapper",
                on: {
                    click: function(t) {
                        if (t.target !== t.currentTarget)
                            return null;
                        e.$store.display.modalCardDetails = !1
                    }
                }
            }, [a("div", {
                staticClass: "modal-dialog modal-dialog-centered",
                attrs: {
                    role: "document"
                }
            }, [a("div", {
                staticClass: "modal-content bg-transparent p-0 border-0"
            }, [a("div", [a("button", {
                staticClass: "btn btn-light py-2 px-3 d-flex align-items-center mb-4 mb-md-5",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalCardDetails = !1
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_left.svg"
                }
            }), e._v(" Retour ")])]), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [a("div", {
                staticClass: "bg-white rounded-lg border border-white border-6 overflow-hidden"
            }, [a("div", {
                staticClass: "card-letter-lg text-center text-white d-flex align-items-center justify-content-center position-absolute border-0",
                style: "background-color:" + e.$deck[e.$store.display.modalCardDetails].color
            }, [e._v(" " + e._s(e.$deck[e.$store.display.modalCardDetails].family[0]) + " ")]), a("div", {
                staticClass: "pt-4 px-4 text-center"
            }, [a("p", {
                staticClass: "h5 text-primary font-weight-bold"
            }, [e._v(" Famille " + e._s(e.$deck[e.$store.display.modalCardDetails].family) + " ")])]), a("div", {
                staticClass: "p-4 text-center"
            }, [a("img", {
                staticClass: "img-fluid-all",
                attrs: {
                    src: e.$deck[e.$store.display.modalCardDetails].image,
                    srcset: e.$deck[e.$store.display.modalCardDetails].image2x + " 2x",
                    alt: "",
                    height: "300px"
                }
            }), a("p", {
                staticClass: "h5 font-weight-bold mt-3"
            }, [e._v(" " + e._s(e.$deck[e.$store.display.modalCardDetails].name) + " ")]), a("p", {
                staticClass: "mb-0 mt-3"
            }, [e._v(" " + e._s(e.$deck[e.$store.display.modalCardDetails].description) + " ")])]), a("div", {
                staticClass: "p-4 position-relative"
            }, [a("div", {
                staticClass: "position-absolute bg-card-detail",
                style: "background-color:" + e.$deck[e.$store.display.modalCardDetails].color
            }), a("p", {
                staticClass: "font-weight-semibold text-center mb-1 position-relative"
            }, [e._v("Les autres membres de la famille")]), a("p", {
                staticClass: "text-center mb-4 small position-relative"
            }, [e._v("Cliquez sur une carte pour avoir plus de détails")]), a("div", {
                staticClass: "row justify-content-center"
            }, e._l(e.cardsOfFamily, (function(t, s) {
                return a("div", {
                    key: s,
                    staticClass: "col-6 col-sm-4",
                    on: {
                        click: function(t) {
                            e.$store.display.modalCardDetails = s
                        }
                    }
                }, [a("div", {
                    staticClass: "mycard mycard-sm border-white bg-white mb-3 mx-auto text-center"
                }, [a("p", {
                    staticClass: "mb-0 text-white card-letter border-white d-flex align-items-center justify-content-center position-absolute top-0",
                    style: "background-color:" + t.color
                }, [e._v(" " + e._s(t.family[0]) + " ")]), a("img", {
                    staticClass: "img-fluid-all pt-2 px-2 pb-1",
                    attrs: {
                        src: t.image,
                        srcset: t.image2x + " 2x",
                        alt: ""
                    }
                })]), a("p", {
                    staticClass: "text-center small font-weight-semibold"
                }, [e._v(e._s(t.name))])])
            }
            )), 0), a("button", {
                staticClass: "position-relative btn btn-sm btn-primary btn-block mt-3",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalCardDetails = !1
                    }
                }
            }, [e._v(" Retour ")])])])])], 1)])])])
        }
          , M = []
          , R = a("c2b4")
          , N = a.n(R)
          , q = {
            name: "CardDetails",
            data: function() {
                return {
                    cardsOfFamily: {},
                    askedCard: {}
                }
            },
            methods: {
                updateModal: function() {
                    for (var e in this.askedCard = this.$deck[this.$store.display.modalCardDetails],
                    this.cardsOfFamily = {},
                    this.$deck)
                        this.$deck[e].family == this.askedCard.family && e != this.$store.display.modalCardDetails && (this.cardsOfFamily[e] = this.$deck[e])
                }
            },
            created: function() {
                this.updateModal()
            },
            beforeUpdate: function() {
                N()({
                    scrollableDomEle: document.querySelector(".modal-wrapper"),
                    direction: "top",
                    duration: 500,
                    easingPreset: "easeInOutCubic"
                })
            }
        }
          , G = q
          , z = Object(c["a"])(G, O, M, !1, null, null, null)
          , B = z.exports
          , V = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "modal-mask z-first bg-dark-95"
            }, [a("div", {
                staticClass: "modal-wrapper",
                on: {
                    click: function(t) {
                        if (t.target !== t.currentTarget)
                            return null;
                        e.$store.display.modalAppui = !1
                    }
                }
            }, [a("div", {
                staticClass: "modal-dialog modal-dialog-centered",
                attrs: {
                    role: "document"
                }
            }, [a("div", {
                staticClass: "modal-content bg-transparent p-0 border-0"
            }, [a("div", {
                staticClass: "bg-white rounded p-4 p-md-5 text-center"
            }, [a("img", {
                staticClass: "mb-3",
                attrs: {
                    src: "/images/pictos/ic_external_link.svg",
                    alt: "",
                    width: "48px",
                    height: "48px"
                }
            }), a("p", {
                staticClass: "font-weight-semibold mb-1 big"
            }, [e._v(" Redirection vers l'appui.org ")]), e._m(0), a("a", {
                staticClass: "btn btn-sm btn-primary btn-block mt-3",
                attrs: {
                    href: "https://www.lappui.org/"
                },
                on: {
                    click: e.goToAppui
                }
            }, [e._v(" Continuer ")])]), a("button", {
                staticClass: "btn btn-sm btn-light btn-block mt-3",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalAppui = !1
                    }
                }
            }, [e._v(" Annuler ")])])])])])
        }
          , J = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("p", {
                staticClass: "text-muted mb-4"
            }, [e._v(" Vous allez être redirigé(e) vers le site de l’Appui."), a("br"), e._v("Voulez-vous continuer? ")])
        }
        ]
          , W = {
            name: "ModalAppui",
            methods: {
                goToAppui: function() {
                    this.$gtm.trackEvent({
                        event: "site"
                    })
                }
            }
        }
          , U = W
          , H = Object(c["a"])(U, V, J, !1, null, null, null)
          , Y = H.exports
          , Q = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "modal-mask z-first bg-dark-95"
            }, [a("div", {
                staticClass: "modal-wrapper",
                on: {
                    click: function(t) {
                        if (t.target !== t.currentTarget)
                            return null;
                        e.$store.display.modalLeave = !1
                    }
                }
            }, [a("div", {
                staticClass: "modal-dialog modal-dialog-centered",
                attrs: {
                    role: "document"
                }
            }, [a("div", {
                staticClass: "modal-content bg-transparent p-0 border-0"
            }, [e._m(0), a("button", {
                staticClass: "btn btn-sm btn-light btn-block mt-3",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalLeave = !1
                    }
                }
            }, [e._v(" Reprendre la partie ")])])])])])
        }
          , K = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "bg-white rounded p-4 p-md-5 text-center"
            }, [a("img", {
                staticClass: "mb-3",
                attrs: {
                    src: "/images/pictos/ic_door_black.svg",
                    alt: "Icone quitter la partie Appui 7 familles",
                    width: "60px",
                    height: "48px"
                }
            }), a("p", {
                staticClass: "font-weight-semibold mb-1 big"
            }, [e._v(" Êtes-vous certain(e) de vouloir quitter la partie? ")]), a("p", {
                staticClass: "text-muted mb-4"
            }, [e._v(" Vous serez remplacé(e) par l’ordinateur. ")]), a("a", {
                staticClass: "btn btn-sm btn-primary btn-block mt-3",
                attrs: {
                    href: "/"
                }
            }, [e._v(" Quitter la partie ")])])
        }
        ]
          , X = {
            name: "ModalLeave"
        }
          , Z = X
          , ee = Object(c["a"])(Z, Q, K, !1, null, null, null)
          , te = ee.exports
          , ae = {
            name: "App",
            components: {
                ModalPlayerLeave: S,
                ModalGameDeleted: j,
                ModalLeave: te,
                Rules: m,
                About: f,
                Families: w,
                ModalCardDetails: B,
                ModalAppui: Y
            },
            data: function() {
                return {
                    store: this.$store
                }
            }
        }
          , se = ae
          , ie = (a("5c0b"),
        Object(c["a"])(se, s, i, !1, null, null, null));
        t["a"] = ie.exports
    },
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t),
        function(e) {
            a.d(t, "vm", (function() {
                return b
            }
            ));
            a("e260"),
            a("e6cf"),
            a("cca6"),
            a("a79d");
            var s = a("2b0e")
              , i = a("031e")
              , r = a.n(i)
              , o = a("8c4f")
              , l = a("b233")
              , n = a("6a60")
              , c = a("8055")
              , d = a.n(c)
              , m = a("3dfd")
              , u = (a("1c9e"),
            a("578a"))
              , p = a("25e0")
              , g = a("864c")
              , v = a("bd8c")
              , y = a.n(v);
            a("ddb8");
            s["a"].use(o["a"]),
            s["a"].use(y.a),
            s["a"].config.productionTip = !1,
            s["a"].prototype.$store = l["a"],
            s["a"].prototype.$deck = n["a"],
            s["a"].prototype.$store.socket = d()("https://api.appui-7familles.ca", {
                secure: "true"
            });
            var f = new o["a"]({
                mode: "history",
                base: e,
                routes: [{
                    path: "/",
                    component: u["a"],
                    name: "Login",
                    meta: {
                        title: "L'Appui"
                    }
                }, {
                    path: "/game/:room",
                    component: p["a"],
                    name: "Game",
                    meta: {
                        title: "Partie en cours..."
                    }
                }, {
                    path: "/test",
                    component: g["a"],
                    name: "Test",
                    meta: {
                        title: "TEST PAGE"
                    }
                }]
            });
            s["a"].use(r.a, {
                id: "GTM-MD692R9",
                debug: !0,
                loadScript: !0,
                vueRouter: f
            });
            var b = new s["a"]({
                router: f,
                render: function(e) {
                    return e(m["a"])
                }
            }).$mount("#app");
            f.beforeEach((function(e, t, a) {
                document.title = e.meta.title + " | L'Appui - Jeu des 7 familles",
                a()
            }
            ))
        }
        .call(this, "/")
    },
    "578a": function(e, t, a) {
        "use strict";
        var s = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showlogin,
                    expression: "showlogin"
                }]
            }, [a("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [e.logged ? a("WaitingRoom") : a("LoginForm", {
                attrs: {
                    logged: e.logged
                },
                on: {
                    "update:logged": function(t) {
                        e.logged = t
                    }
                }
            })], 1), a("transition", {
                attrs: {
                    name: "fadeSlow"
                }
            }, [e.showSplash ? a("SplashScreen") : e._e()], 1)], 1)
        }
          , i = []
          , r = (a("4160"),
        a("a15b"),
        a("d81d"),
        a("b64b"),
        a("159b"),
        function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("div", {
                staticClass: "bg-pattern position-fixed h-100 w-100 pointer-events-none"
            }), a("div", {
                staticClass: "container h-100"
            }, [a("div", {
                staticClass: "row h-100"
            }, [a("div", {
                staticClass: "col-12 align-self-start"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12 col-sm-11 col-md-8 col-lg-6 col-xl-5 mx-auto"
            }, [a("Header", {
                attrs: {
                    notStarted: "true"
                }
            })], 1)])]), a("div", {
                staticClass: "col-12 col-sm-11 col-md-8 col-lg-6 col-xl-5 mx-auto"
            }, [a("div", {
                staticClass: "py-3"
            }, [a("form", {
                attrs: {
                    autocomplete: "off"
                },
                on: {
                    submit: function(t) {
                        t.preventDefault(),
                        e.create ? e.createRoom() : e.joinRoom()
                    }
                }
            }, [a("h2", {
                staticClass: "text-center text-white font-weight-bold mb-3"
            }, [e._v(" Bonjour, "), a("span", {
                staticClass: "font-weight-light"
            }, [e._v(e._s(e.me.playername))])]), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 == e.formStep,
                    expression: "formStep == 1"
                }]
            }, [a("div", {
                staticClass: "form-group mb-5"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.me.playername,
                    expression: "me.playername"
                }],
                staticClass: "form-control text-center",
                class: {
                    invalid: e.me.avatar && !e.me.playername
                },
                attrs: {
                    type: "text",
                    name: "playername",
                    placeholder: e.placeholder,
                    required: "",
                    maxlength: "20",
                    "aria-label": "Indiquez votre nom"
                },
                domProps: {
                    value: e.me.playername
                },
                on: {
                    keydown: function(t) {
                        if (!t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter"))
                            return null;
                        t.preventDefault()
                    },
                    input: function(t) {
                        t.target.composing || e.$set(e.me, "playername", t.target.value)
                    }
                }
            })]), a("div", {
                staticClass: "mb-5"
            }, [a("p", {
                staticClass: "text-center text-white font-weight-semibold"
            }, [e._v("Choisissez votre avatar")]), a("div", {
                staticClass: "avatar-radio-button"
            }, e._l(8, (function(t, s) {
                return a("div", {
                    key: s
                }, [a("div", {
                    staticClass: "mt-3 text-center"
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.me.avatar,
                        expression: "me.avatar"
                    }],
                    staticClass: "d-none",
                    attrs: {
                        type: "radio",
                        name: "avatar",
                        id: "avatar_" + t
                    },
                    domProps: {
                        value: t,
                        checked: e._q(e.me.avatar, t)
                    },
                    on: {
                        change: function(a) {
                            return e.$set(e.me, "avatar", t)
                        }
                    }
                }), a("label", {
                    staticClass: "position-relative",
                    attrs: {
                        for: "avatar_" + t
                    }
                }, [a("img", {
                    staticClass: "rounded-circle img-fluid avatar",
                    class: {
                        hasavatar: e.me.avatar
                    },
                    attrs: {
                        src: "/images/avatars/Avatar" + t + "@2x.png",
                        alt: "Avatar " + t + " jeu 7 familles Appui"
                    }
                }), e._m(0, !0)])]), a("div", {
                    staticClass: "mt-3 text-center"
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.me.avatar,
                        expression: "me.avatar"
                    }],
                    staticClass: "d-none",
                    attrs: {
                        type: "radio",
                        name: "avatar",
                        id: "avatar_" + (t + 8)
                    },
                    domProps: {
                        value: t + 8,
                        checked: e._q(e.me.avatar, t + 8)
                    },
                    on: {
                        change: function(a) {
                            e.$set(e.me, "avatar", t + 8)
                        }
                    }
                }), a("label", {
                    staticClass: "position-relative",
                    attrs: {
                        for: "avatar_" + (t + 8)
                    }
                }, [a("img", {
                    staticClass: "rounded-circle img-fluid avatar",
                    class: {
                        hasavatar: e.me.avatar
                    },
                    attrs: {
                        src: "/images/avatars/Avatar" + (t + 8) + "@2x.png",
                        alt: "Avatar " + (t + 8) + " jeu 7 familles Appui"
                    }
                }), e._m(1, !0)])])])
            }
            )), 0)]), e.create ? a("div", [a("button", {
                staticClass: "btn btn-lg btn-primary btn-block",
                attrs: {
                    disabled: !e.me.avatar || !e.me.playername,
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.formStep = 2
                    }
                }
            }, [e._v("Continuer")])]) : a("button", {
                staticClass: "btn btn-lg btn-primary btn-block",
                attrs: {
                    type: "submit",
                    disabled: !e.me.avatar || !e.me.playername
                }
            }, [e._v(" Rejoindre une partie ")])]), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 2 == e.formStep,
                    expression: "formStep == 2"
                }]
            }, [a("div", {
                staticClass: "text-center"
            }, [a("img", {
                staticClass: "rounded-circle avatar-big mb-4",
                attrs: {
                    src: "/images/avatars/Avatar" + e.me.avatar + ".png",
                    srcset: "/images/avatars/Avatar" + e.me.avatar + "@2x.png 2x"
                }
            })]), e.create ? a("div", {
                staticClass: "mb-5"
            }, [a("p", {
                staticClass: "text-center text-white"
            }, [e._v("Combien de joueurs seront de la partie?")]), a("div", {
                staticClass: "form-group d-flex justify-content-between square-radio-button"
            }, e._l(5, (function(t, s) {
                return a("div", {
                    key: s
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.playerLimit,
                        expression: "playerLimit"
                    }],
                    staticClass: "d-none",
                    attrs: {
                        type: "radio",
                        name: "playerLimit",
                        id: "playerLimit_" + t
                    },
                    domProps: {
                        value: t + 1,
                        checked: e._q(e.playerLimit, t + 1)
                    },
                    on: {
                        change: function(a) {
                            e.playerLimit = t + 1
                        }
                    }
                }), a("label", {
                    staticClass: "btn btn-outline-light position-relative",
                    attrs: {
                        for: "playerLimit_" + t
                    }
                }, [e._v(" " + e._s(t + 1) + " "), a("img", {
                    staticClass: "position-absolute",
                    attrs: {
                        src: "/images/pictos/ic_check.svg"
                    }
                })])])
            }
            )), 0)]) : e._e(), e.create ? a("div", [a("p", {
                staticClass: "font-weight-semibold text-center text-white"
            }, [e._v("Choisissez l’une des options suivantes:")]), a("button", {
                staticClass: "btn btn-primary btn-block d-flex align-items-center justify-content-center mb-3",
                attrs: {
                    type: "submit",
                    disabled: !e.me.avatar || !e.me.playername
                },
                on: {
                    click: function(t) {
                        e.$store.gameLogic.onlyBot = !0
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_computer.svg",
                    width: "39.5px",
                    height: "31.98px"
                }
            }), e._v(" Jouer contre l’ordinateur ")]), a("button", {
                staticClass: "btn btn-primary btn-block",
                attrs: {
                    type: "submit",
                    disabled: !e.me.avatar || !e.me.playername
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_users.svg",
                    width: "32px",
                    height: "32px"
                }
            }), e._v(" Jouer contre vos amis ")])]) : e._e()])]), e._m(2)])])])])])
        }
        )
          , o = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "circle rounded-circle border-success position-absolute overflow-hidden"
            }, [a("img", {
                staticClass: "position-absolute",
                attrs: {
                    src: "/images/pictos/ic_check.svg",
                    alt: "Picto validation avatar Appui 7 familles"
                }
            })])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "circle rounded-circle border-success position-absolute overflow-hidden"
            }, [a("img", {
                staticClass: "position-absolute",
                attrs: {
                    src: "/images/pictos/ic_check.svg",
                    alt: "Picto validation avatar Appui 7 familles"
                }
            })])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "mt-4 mb-3 text-center"
            }, [a("p", {
                staticClass: "text-white mb-1 font-weight-light"
            }, [e._v("Présenté par :")]), a("img", {
                attrs: {
                    src: "/images/logodesjardins.svg",
                    alt: ""
                }
            })])
        }
        ]
          , l = (a("d3b7"),
        a("ac1f"),
        a("3ca3"),
        a("841c"),
        a("ddb0"),
        a("2b3d"),
        a("2feb"))
          , n = a("ac77")
          , c = {
            name: "LoginForm",
            components: {
                Header: n["a"]
            },
            data: function() {
                return {
                    formStep: 1,
                    roomID: this.$route.query.join,
                    create: !this.$route.query.join,
                    placeholder: "Quel est votre nom?",
                    me: {
                        avatar: "",
                        playername: "",
                        playerIndex: !1
                    },
                    playerLimit: 4,
                    showModalShare: !1,
                    showModalWaitOthers: !1,
                    store: this.$store
                }
            },
            methods: {
                createRoom: function() {
                    var e = this;
                    this.$store.socket.emit("room:create", {
                        playername: this.me.playername,
                        playerLimit: this.playerLimit
                    }, (function(t) {
                        if (!t)
                            return !1;
                        e.$store.roomID = t,
                        e.roomID = t,
                        e.showModalShare = !0,
                        e.joinRoom()
                    }
                    ))
                },
                joinRoom: function() {
                    var e = this;
                    localStorage.setItem("savedName", this.me.playername),
                    localStorage.setItem("lastParty", "?join=" + this.roomID),
                    this.$store.socket.emit("room:join", {
                        roomID: this.roomID,
                        playername: this.me.playername,
                        avatar: this.me.avatar
                    }, (function(t) {
                        if ("success" == t.statut)
                            for (var a in e.$store.socket.sid = t.sid,
                            e.$emit("update:logged", !0),
                            e.$store.gameLogic.playerLimit = t.playerLimit,
                            e.$store.gameLogic.playerLayout = t.playerLayout,
                            e.$store.selfPlayer = t.players[e.$store.socket.sid],
                            e.$store.selfPlayer.myPlayerLayout = [],
                            e.$store.gameLogic.playerLayout)
                                e.$store.gameLogic.playerLayout[a] ? e.$store.selfPlayer.myPlayerLayout.push((e.$store.gameLogic.playerLayout[a] + e.$store.selfPlayer.playerIndex) % e.$store.gameLogic.playerLimit) : e.$store.selfPlayer.myPlayerLayout.push(!1);
                        else
                            e.$store.display.modalGameDeleted = !0
                    }
                    ))
                }
            },
            created: function() {
                var e = localStorage.getItem("savedName")
                  , t = localStorage.getItem("lastParty");
                if (t == window.location.search) {
                    var a = window.location.search
                      , s = new URLSearchParams(a)
                      , i = s.get("join");
                    i && e && (this.me.playername = e,
                    this.joinRoom())
                } else
                    localStorage.setItem("started", !1)
            },
            mounted: function() {
                Object(l["a"])({
                    container: ".avatar-radio-button",
                    items: 3,
                    loop: !1,
                    controls: !1,
                    mouseDrag: !0,
                    navPosition: "bottom"
                })
            },
            beforeUpdate: function() {
                !this.me.playername && this.me.avatar ? this.placeholder = "N'oubliez pas votre nom!" : this.placeholder = "Quel est votre nom?"
            }
        }
          , d = c
          , m = a("2877")
          , u = Object(m["a"])(d, r, o, !1, null, null, null)
          , p = u.exports
          , g = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return "false" == e.started ? a("div", [a("div", {
                staticClass: "container h-100"
            }, [a("div", {
                staticClass: "row h-100"
            }, [a("div", {
                staticClass: "col-12 col-lg-9 col-xl-8 mx-auto"
            }, [a("Header")], 1), a("div", {
                staticClass: "col-12 col-lg-9 col-xl-8 mx-auto"
            }, [a("div", {
                staticClass: "row tabletop-wrapper bg-info p-1"
            }, [a("div", {
                staticClass: "tabletop bg-pattern border border-secondary p-4 w-100"
            }, [a("div", {
                staticClass: "row align-items-center"
            }, [e.$store.gameLogic.playerLayout[2] ? a("div", {
                staticClass: "col-12 text-center"
            }, [a("WaitingPlayer", {
                attrs: {
                    player: e.$store.players[e.$store.gameLogic.playerOrder[e.myPlayerLayout[2]]]
                }
            })], 1) : e._e(), a("div", {
                staticClass: "col-2 col-md-3"
            }, [a("div", {
                staticClass: "row h-100"
            }, [e.$store.gameLogic.playerLayout[1] ? a("div", {
                staticClass: "col-12 align-items-center d-flex justify-content-center px-0"
            }, [a("WaitingPlayer", {
                attrs: {
                    player: e.$store.players[e.$store.gameLogic.playerOrder[e.myPlayerLayout[1]]]
                }
            })], 1) : e._e(), e.$store.gameLogic.playerLayout[0] ? a("div", {
                staticClass: "col-12 align-items-center d-flex justify-content-center px-0"
            }, [a("WaitingPlayer", {
                attrs: {
                    player: e.$store.players[e.$store.gameLogic.playerOrder[e.myPlayerLayout[0]]]
                }
            })], 1) : e._e()])]), a("div", {
                staticClass: "col-8 col-md-6"
            }, [a("div", {
                staticClass: "rounded bg-white p-4 text-center mb-3"
            }, [e.$store.nbPlayers < e.$store.gameLogic.playerLimit && !e.$store.gameLogic.onlyBot ? a("div", [a("img", {
                staticClass: "spinning",
                attrs: {
                    src: "/images/pictos/ic_loading.svg",
                    width: "24.58px",
                    height: "24px",
                    alt: "Icone attente autres joueurs Appui 7 familles"
                }
            }), a("p", {
                staticClass: "mb-0 font-weight-semibold mt-2"
            }, [e._v(" En attente de joueurs... ")])]) : a("div", [a("img", {
                attrs: {
                    src: "/images/pictos/ic_check.svg",
                    alt: "Icone joueurs prêts Appui 7 familles",
                    width: "24px",
                    height: "24px"
                }
            }), a("p", {
                staticClass: "mb-0 font-weight-semibold mt-2"
            }, [e._v(" Tous les joueurs sont arrivés ")])])]), this.$store.nbPlayers < e.$store.gameLogic.playerLimit && !e.$store.gameLogic.onlyBot ? a("button", {
                staticClass: "btn btn-secondary btn-block mb-3 d-flex align-items-center justify-content-center text-white",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalShare = !0
                    }
                }
            }, [a("img", {
                staticClass: "mr-2 d-none d-sm-block",
                attrs: {
                    src: "/images/pictos/ic_invite.svg",
                    alt: "Icone partager partie 7 familles Appui",
                    width: "25.7px",
                    height: "17.98px"
                }
            }), e._v(" Inviter des amis ")]) : e._e(), a("button", {
                staticClass: "btn btn-lg btn-primary btn-block mb-0 d-flex align-items-center justify-content-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.startGame
                }
            }, [a("img", {
                staticClass: "mr-2 d-none d-sm-block",
                attrs: {
                    src: "/images/pictos/ic_computer.svg",
                    alt: "Icone lancer partie 7 familles Appui",
                    width: "39.5px",
                    height: "31.98px"
                }
            }), e._v(" Lancer la partie ")])]), a("div", {
                staticClass: "col-2 col-md-3"
            }, [a("div", {
                staticClass: "row h-100"
            }, [e.$store.gameLogic.playerLayout[3] ? a("div", {
                staticClass: "col-12 align-items-center d-flex justify-content-center px-0"
            }, [a("WaitingPlayer", {
                attrs: {
                    player: e.$store.players[e.$store.gameLogic.playerOrder[e.myPlayerLayout[3]]]
                }
            })], 1) : e._e(), e.$store.gameLogic.playerLayout[4] ? a("div", {
                staticClass: "col-12 align-items-center d-flex justify-content-center px-0"
            }, [a("WaitingPlayer", {
                attrs: {
                    player: e.$store.players[e.$store.gameLogic.playerOrder[e.myPlayerLayout[4]]]
                }
            })], 1) : e._e()])]), a("div", {
                staticClass: "col-12 text-center"
            }, [a("WaitingPlayer", {
                attrs: {
                    player: e.$store.selfPlayer
                }
            })], 1)])])])])])]), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [a("ModalShare", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.$store.display.modalShare,
                    expression: "$store.display.modalShare"
                }],
                attrs: {
                    roomID: e.$store.roomID
                }
            })], 1), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [a("ModalWaitOthers", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.$store.display.modalWaitOthers,
                    expression: "$store.display.modalWaitOthers"
                }]
            })], 1)], 1) : e._e()
        }
          , v = []
          , y = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "my-4 text-center"
            }, [a("p", {
                staticClass: "text-white small mb-1"
            }, [e.player && e.player.bot ? a("span", [e._v("🤖 ")]) : e._e(), e._v(e._s(e.player ? e.player.playername : "Bonjour!"))]), a("div", {
                staticClass: "position-relative avatar-player d-inline-block",
                class: {
                    ready: e.player || e.$store.gameLogic.onlyBot
                }
            }, [e.player && e.player.avatar ? a("img", {
                staticClass: "rounded-circle img-fluid avatar",
                attrs: {
                    src: "/images/avatars/Avatar" + e.player.avatar + ".png",
                    srcset: "/images/avatars/Avatar" + e.player.avatar + "@2x.png 2x"
                }
            }) : a("img", {
                staticClass: "rounded-circle img-fluid avatar",
                attrs: {
                    src: "/images/avatars/Avatar.png",
                    srcset: "/images/avatars/Avatar@2x.png 2x"
                }
            }), e._m(0)])])
        }
          , f = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "circle rounded-circle border-success position-absolute overflow-hidden"
            }, [a("img", {
                staticClass: "position-absolute",
                attrs: {
                    src: "/images/pictos/ic_check.svg"
                }
            })])
        }
        ]
          , b = {
            name: "WaitingPlayer",
            props: ["player"]
        }
          , h = b
          , _ = Object(m["a"])(h, y, f, !1, null, null, null)
          , C = _.exports
          , x = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "modal-mask z-first bg-dark-95"
            }, [a("div", {
                staticClass: "modal-wrapper",
                on: {
                    click: function(t) {
                        if (t.target !== t.currentTarget)
                            return null;
                        e.$store.display.modalWaitOthers = !1
                    }
                }
            }, [a("div", {
                staticClass: "modal-dialog modal-dialog-centered",
                attrs: {
                    role: "document"
                }
            }, [a("div", {
                staticClass: "modal-content bg-transparent p-0 border-0"
            }, [a("div", {
                staticClass: "bg-white rounded p-4 p-md-5 text-center"
            }, [a("img", {
                staticClass: "mb-3 spinning",
                attrs: {
                    src: "/images/pictos/ic_loading.svg"
                }
            }), a("p", {
                staticClass: "font-weight-semibold mb-1 big"
            }, [e._v(" Tous les joueurs ne sont pas encore arrivés! ")]), a("p", {
                staticClass: "text-muted mb-3"
            }, [e._v(" Si vous lancez la partie maintenant, les joueurs manquants ne pourront pas embarquer dans la partie avec vous et seront remplacés par des robots. Souhaitez-vous tout de même lancer la partie? ")]), a("button", {
                staticClass: "btn btn-sm btn-primary btn-block mb-4 d-flex align-items-center justify-content-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.startGame
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_cards.svg"
                }
            }), e._v(" Lancer la partie ")]), a("p", {
                staticClass: "text-muted mb-3"
            }, [e._v(" Pour patienter, n’hésitez pas à consulter les règles du jeu ou le tableau des familles ")]), a("button", {
                staticClass: "btn btn-sm btn-info btn-block mb-3 d-flex align-items-center justify-content-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.rules = !0
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_rules.svg"
                }
            }), e._v(" Règles du jeu ")]), a("button", {
                staticClass: "btn btn-sm btn-info btn-block mb-0 d-flex align-items-center justify-content-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.families = !0
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_familles.svg"
                }
            }), e._v(" Tableau des familles ")])]), a("button", {
                staticClass: "btn btn-sm btn-light btn-block mt-3",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalWaitOthers = !1
                    }
                }
            }, [e._v("Attendre tout le monde")])])])])])
        }
          , w = []
          , $ = {
            name: "ModalWaitOthers",
            data: function() {
                return {
                    started: ""
                }
            },
            methods: {
                startGame: function() {
                    this.$gtm.trackEvent({
                        event: "parties-commencees"
                    }),
                    this.$store.socket.emit("game:start")
                }
            },
            created: function() {
                var e = localStorage.getItem("started");
                "true" == e && this.startGame()
            }
        }
          , k = $
          , L = Object(m["a"])(k, x, w, !1, null, null, null)
          , P = L.exports
          , I = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "modal-mask z-first bg-dark-95"
            }, [a("div", {
                staticClass: "modal-wrapper",
                on: {
                    click: function(t) {
                        if (t.target !== t.currentTarget)
                            return null;
                        e.$store.display.modalShare = !1
                    }
                }
            }, [a("div", {
                staticClass: "modal-dialog modal-dialog-centered",
                attrs: {
                    role: "document"
                }
            }, [a("div", {
                staticClass: "modal-content bg-transparent p-0 border-0"
            }, [a("div", {
                staticClass: "bg-white rounded p-4 p-md-5 text-center"
            }, [a("img", {
                staticClass: "mb-3",
                attrs: {
                    src: "/images/pictos/ic_users_black.svg",
                    width: "48px",
                    height: "48px",
                    alt: "utilisateur partegr Appui 7 familles"
                }
            }), a("p", {
                staticClass: "font-weight-semibold mb-1 big"
            }, [e._v(" Nouvelle partie ")]), a("p", {
                staticClass: "text-muted mb-4"
            }, [e._v(" Partagez ce lien avec les amis avec qui vous souhaitez jouer. ")]), a("input", {
                staticClass: "form-control text-center border-0 font-weight-semibold text-info mb-4 pl-5",
                attrs: {
                    type: "text",
                    readonly: "",
                    id: "urlSharing"
                },
                domProps: {
                    value: e.host + "?join=" + e.roomID
                }
            }), a("button", {
                staticClass: "btn btn-sm btn-info btn-block d-flex align-items-center justify-content-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.copyUrl
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_copy.svg",
                    alt: "icone copy url Appui 7 familles",
                    width: "19.66px",
                    height: "23.98px"
                }
            }), e._v(" " + e._s(e.copyBtn) + " ")]), a("ShareNetwork", {
                attrs: {
                    network: "sms",
                    url: e.host + "?join=" + e.roomID,
                    title: "Rejoignez-moi pour une partie de 7 familles!",
                    description: "Venez découvrir l'univers des proches aidants à travers le jeu des 7 familles de l'Appui!"
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_sms.svg",
                    alt: "Icone partage SMS Appui 7 familles",
                    width: "24px",
                    height: "24px"
                }
            }), e._v(" Envoyer par SMS ")]), a("ShareNetwork", {
                attrs: {
                    network: "facebook",
                    url: e.host + "?join=" + e.roomID,
                    title: "Rejoignez-moi pour une partie de 7 familles!",
                    description: "Venez découvrir l'univers des proches aidants à travers le jeu des 7 familles de l'Appui!"
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_facebook.svg",
                    alt: "Icone Facebook partage partie 7 familles Appui",
                    width: "19px",
                    height: "19px"
                }
            }), e._v(" Partager sur Facebook ")]), a("ShareNetwork", {
                attrs: {
                    network: "whatsapp",
                    url: e.host + "?join=" + e.roomID,
                    title: "Rejoignez-moi pour une partie de 7 familles!",
                    description: "Venez découvrir l'univers des proches aidants à travers le jeu des 7 familles de l'Appui!"
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_whatsapp.svg",
                    alt: "Icone Whatsapp partage partie 7 familles Appui",
                    width: "23.88px",
                    height: "23.98px"
                }
            }), e._v(" Envoyer via Whatsapp ")])], 1), a("button", {
                staticClass: "btn btn-sm btn-light btn-block mt-3",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalShare = !1
                    }
                }
            }, [e._v("Retour")])])])])])
        }
          , j = []
          , A = (a("25f0"),
        {
            name: "ModalShare",
            props: ["roomID"],
            data: function() {
                return {
                    copyBtn: "Copier le lien",
                    host: location.origin.toString()
                }
            },
            methods: {
                copyUrl: function() {
                    document.getElementById("urlSharing").select(),
                    document.execCommand("copy"),
                    this.copyBtn = "Lien copié!"
                }
            }
        })
          , D = A
          , T = Object(m["a"])(D, I, j, !1, null, null, null)
          , E = T.exports
          , F = {
            name: "WaitingRoom",
            components: {
                WaitingPlayer: C,
                Header: n["a"],
                ModalWaitOthers: P,
                ModalShare: E
            },
            data: function() {
                return {
                    store: this.$store,
                    myPlayerLayout: this.$store.selfPlayer.myPlayerLayout,
                    started: !0
                }
            },
            created: function() {
                this.$route.query.join || this.$store.gameLogic.onlyBot || (this.$store.display.modalShare = !0),
                this.started = localStorage.getItem("started"),
                "true" == this.started && this.startGame()
            },
            methods: {
                startGame: function() {
                    this.$store.gameLogic.playerLimit == this.$store.nbPlayers || this.$store.gameLogic.onlyBot ? (this.$gtm.trackEvent({
                        event: "parties-commencees"
                    }),
                    this.$store.socket.emit("game:start")) : this.$store.display.modalWaitOthers = !0
                }
            }
        }
          , S = F
          , O = Object(m["a"])(S, g, v, !1, null, null, null)
          , M = O.exports
          , R = function() {
            var e = this
              , t = e.$createElement;
            e._self._c;
            return e._m(0)
        }
          , N = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "splashscreen w-100 h-100 position-fixed bg-secondary"
            }, [a("div", {
                staticClass: "container h-100"
            }, [a("div", {
                staticClass: "row h-100 py-3 py-lg-5"
            }, [a("div", {
                staticClass: "col-12 text-center align-self-center h-100 d-flex justify-content-center"
            }, [a("img", {
                staticClass: "img-fluid-all align-self-center",
                attrs: {
                    src: "/images/Loading_screen.png",
                    srcset: "/images/Loading_screen@2x.png 2x",
                    alt: "Image accueil Appui jeu de 7 familles"
                }
            })])])])])
        }
        ]
          , q = {
            name: "SplashScreen"
        }
          , G = q
          , z = Object(m["a"])(G, R, N, !1, null, null, null)
          , B = z.exports
          , V = {
            name: "Login",
            components: {
                LoginForm: p,
                WaitingRoom: M,
                SplashScreen: B
            },
            data: function() {
                return {
                    logged: !1,
                    showSplash: !0,
                    myPlayerLayout: this.$store.selfPlayer.myPlayerLayout,
                    showlogin: !0
                }
            },
            methods: {
                initDisplay: function() {
                    this.$store.display.modalGameOver = !1,
                    "playerReplay" == this.$store.gameLogic.statut && (this.$store.gameLogic.statut = "playerTurn")
                }
            },
            mounted: function() {
                var e = this;
                setTimeout((function() {
                    e.showSplash = !1
                }
                ), 2500),
                this.$store.socket.on("room:newplayer", (function(t) {
                    Object.keys(t.players).forEach((function(a) {
                        e.$store.gameLogic.playerOrder[t.players[a].playerIndex] = t.players[a].playerID
                    }
                    )),
                    e.$store.players = t.players,
                    e.$store.nbPlayers = Object.keys(e.$store.players).length
                }
                )),
                this.$store.socket.on("game:started", (function(t) {
                    e.initDisplay(),
                    Object.keys(t.gameRoom).forEach((function(a) {
                        e.$store.gameLogic.playerOrder[t.gameRoom[a].playerIndex] = t.gameRoom[a].playerID
                    }
                    )),
                    e.$store.players = t.gameRoom,
                    Object.keys(e.$store.players).map((function(a) {
                        e.$store.players[a].score = t.gameRoom[a].score,
                        e.$store.selfPlayer.playerID == a && (e.$store.selfPlayer.score = t.gameRoom[a].score)
                    }
                    )),
                    e.$store.nbPlayers = Object.keys(e.$store.players).length,
                    e.$store.gameLogic.deck = t.deck,
                    e.$store.gameLogic.actualTurn = t.firstPlayer,
                    "/" == e.$route.path && e.$router.push(t.url),
                    e.$store.socket.emit("card:getCards", (function(t) {
                        e.$store.selfPlayer.cards = [];
                        for (var a = 0; a < t.cards.length; a++)
                            e.$store.selfPlayer.cards.push(t.cards[a])
                    }
                    ))
                }
                ))
            },
            created: function() {
                var e = localStorage.getItem("started");
                this.$route.query.join && "true" == e && (this.showlogin = !1,
                this.$store.display.modalGameRestarted = !0)
            }
        }
          , J = V
          , W = Object(m["a"])(J, s, i, !1, null, null, null);
        t["a"] = W.exports
    },
    "5c0b": function(e, t, a) {
        "use strict";
        a("9c0c")
    },
    "6a60": function(e, t, a) {
        "use strict";
        var s = [{
            family: "Côté",
            color: "#00AEEF",
            name: "Le grand-père",
            description: "Paul, 86 ans. Il vit seul à son domicile et a arrêté de conduire il y a quelques mois, mais sa fille l’aide beaucoup. Il aime leurs moments ensemble. ",
            image: "/images/Personnages_detourees/01_Cote/01_Grand_pere.png",
            image2x: "/images/Personnages_detourees/01_Cote/01_Grand_pere@2x.png"
        }, {
            family: "Côté",
            color: "#00AEEF",
            name: "La mère",
            description: "Olivia s’occupe de l’épicerie et des rendez-vous médicaux de son papa, le voit chaque semaine et l’appelle tous les jours. Entre lui, sa fille et son travail, elle est débordée! C’est une proche aidante.",
            image: "/images/Personnages_detourees/01_Cote/02_Mere.png",
            image2x: "/images/Personnages_detourees/01_Cote/02_Mere@2x.png"
        }, {
            family: "Côté",
            color: "#00AEEF",
            name: "Le père",
            description: "Pierre élève sa fille aux côtés de sa femme, mais est souvent en déplacement. Il aide parfois son beau-père, notamment dans le jardin. C’est un proche aidant. ",
            image: "/images/Personnages_detourees/01_Cote/03_Pere.png",
            image2x: "/images/Personnages_detourees/01_Cote/03_Pere@2x.png"
        }, {
            family: "Côté",
            color: "#00AEEF",
            name: "La fille",
            description: "Marion, 16 ans. C’est une ado qui aime la musique et les sorties avec ses amies. Elle est bonne élève et a beaucoup d’activités extrascolaires. ",
            image: "/images/Personnages_detourees/01_Cote/04_Fille.png",
            image2x: "/images/Personnages_detourees/01_Cote/04_Fille@2x.png"
        }, {
            family: "Côté",
            color: "#00AEEF",
            name: "L’employeuse de la mère",
            description: "Myriam est l’employeuse d’Olivia. Elle fait preuve de compréhension quand Olivia est confrontée à des urgences personnelles. ",
            image: "/images/Personnages_detourees/01_Cote/05_Employeuse_de_la_mere.png",
            image2x: "/images/Personnages_detourees/01_Cote/05_Employeuse_de_la_mere@2x.png"
        }, {
            family: "Côté",
            color: "#00AEEF",
            name: "La conseillère - Info-aidant",
            description: "Sarah a été la conseillère d’Olivia chez Info-aidant. Elle l’a écoutée parler de sa situation et vient de lui suggérer des services de répit afin de lui permettre de prendre une pause. ",
            image: "/images/Personnages_detourees/01_Cote/06_Conseillere_IA.png",
            image2x: "/images/Personnages_detourees/01_Cote/06_Conseillere_IA@2x.png"
        }, {
            family: "Garcia",
            color: "#FFCB05",
            name: "Le grand-père",
            description: "Ricardo, 82 ans. Il rend visite une fois par semaine à sa conjointe qui vit en CHSLD. Même s’il se sent très seul, devant Rachel, il fait bonne figure! C’est un proche aidant.",
            image: "/images/Personnages_detourees/02_Garcia/01_Grand_pere.png",
            image2x: "/images/Personnages_detourees/02_Garcia/01_Grand_pere@2x.png"
        }, {
            family: "Garcia",
            color: "#FFCB05",
            name: "La grand-mère",
            description: "Rachel, 81 ans. Atteinte de la maladie d’Alzheimer, elle vit en CHSLD. Son état se dégrade petit à petit mais elle aime partager un carré de chocolat avec ses proches lorsqu’ils lui rendent visite.",
            image: "/images/Personnages_detourees/02_Garcia/02_Grand_mere.png",
            image2x: "/images/Personnages_detourees/02_Garcia/02_Grand_mere@2x.png"
        }, {
            family: "Garcia",
            color: "#FFCB05",
            name: "La mère",
            description: "Marie, 42 ans. Elle est la fille de Ricardo et Rachel, mais ne voit pas beaucoup ses parents, car elle a déménagé dans le Centre-du-Québec. ",
            image: "/images/Personnages_detourees/02_Garcia/03_Mere.png",
            image2x: "/images/Personnages_detourees/02_Garcia/03_Mere@2x.png"
        }, {
            family: "Garcia",
            color: "#FFCB05",
            name: "La fille",
            description: "Joséphine, 13 ans. Elle rend visite à son grand-père à chaque vacances scolaires et adore les gâteaux au chocolat qu’ils font ensemble. ",
            image: "/images/Personnages_detourees/02_Garcia/04_Fille.png",
            image2x: "/images/Personnages_detourees/02_Garcia/04_Fille@2x.png"
        }, {
            family: "Garcia",
            color: "#FFCB05",
            name: "La préposée aux bénéficiaires",
            description: "Elle travaille dans l’étage où est installée Rachel. Au fil du temps, elle a développé beaucoup d’affection pour Ricardo, qui lui fait part de ses soucis lorsqu’elle a un peu de temps libre. ",
            image: "/images/Personnages_detourees/02_Garcia/05_Preposee_aux_beneficiaires.png",
            image2x: "/images/Personnages_detourees/02_Garcia/05_Preposee_aux_beneficiaires@2x.png"
        }, {
            family: "Garcia",
            color: "#FFCB05",
            name: "La conseillère - Info-aidant",
            description: "Cathy est la conseillère qui a répondu à Ricardo chez Info-aidant. Ricardo a beaucoup de difficultés à surmonter ce deuil blanc et a besoin de se confier.",
            image: "/images/Personnages_detourees/02_Garcia/06_Conseillere_IA.png",
            image2x: "/images/Personnages_detourees/02_Garcia/06_Conseillere_IA@2x.png"
        }, {
            family: "Jones",
            color: "#F15B32",
            name: "Le père",
            description: "Karl, 59 ans, est très fier des progrès que son fils Manu accomplit tous les jours, mais s’inquiète beaucoup pour l’avenir. C’est un proche aidant.",
            image: "/images/Personnages_detourees/03_Jones/01_Pere.png",
            image2x: "/images/Personnages_detourees/03_Jones/01_Pere@2x.png"
        }, {
            family: "Jones",
            color: "#F15B32",
            name: "La  mère",
            description: "Maddie, 58 ans, ne prévoit pas de prendre sa retraite rapidement: la famille a peur de ne plus avoir les moyens d’offrir une bonne prise en charge à leur fils. C’est une proche aidante.",
            image: "/images/Personnages_detourees/03_Jones/02_Mere.png",
            image2x: "/images/Personnages_detourees/03_Jones/02_Mere@2x.png"
        }, {
            family: "Jones",
            color: "#F15B32",
            name: "Le fils",
            description: "Manu, 26 ans. Il est atteint d’autisme. Bien conscient de sa différence, il est relativement indépendant, mais vit chez ses parents et adore leur petite vie. ",
            image: "/images/Personnages_detourees/03_Jones/03_Fils.png",
            image2x: "/images/Personnages_detourees/03_Jones/03_Fils@2x.png"
        }, {
            family: "Jones",
            color: "#F15B32",
            name: "Le chien",
            description: "Joe est un chien d’assistance pour Manu, mais c’est surtout son meilleur ami! Plus jeune, il l’a beaucoup aidé à réduire son stress. ",
            image: "/images/Personnages_detourees/03_Jones/04_Chien.png",
            image2x: "/images/Personnages_detourees/03_Jones/04_Chien@2x.png"
        }, {
            family: "Jones",
            color: "#F15B32",
            name: "La docteure",
            description: " Laura, 53 ans. Elle a tissé une vraie relation avec Manu, qu’elle suit depuis longtemps. Elle travaille dans un centre spécialisé vers lequel les Jones se sont tournés après un échange avec Info-aidant.",
            image: "/images/Personnages_detourees/03_Jones/05_Docteure.png",
            image2x: "/images/Personnages_detourees/03_Jones/05_Docteure@2x.png"
        }, {
            family: "Jones",
            color: "#F15B32",
            name: "La conseillère - Info-aidant",
            description: "Carmen a aidé les Jones à trouver les meilleures ressources disponibles pour Manu et leur a notamment donné des références pour profiter de journées de répit grâce à un centre de jour. ",
            image: "/images/Personnages_detourees/03_Jones/06_Conseillere_IA.png",
            image2x: "/images/Personnages_detourees/03_Jones/06_Conseillere_IA@2x.png"
        }, {
            family: "Nguyen",
            color: "#DE2F92",
            name: "La mère",
            description: "Claire Nguyen, 83 ans est touchée par une grosse arthrose, mais reste à domicile. Elle entretient une belle relation d’amitié avec sa voisine, Gabrielle, malgré leur différence d’âge.",
            image: "/images/Personnages_detourees/04_Nguyen/01_Mere.png",
            image2x: "/images/Personnages_detourees/04_Nguyen/01_Mere@2x.png"
        }, {
            family: "Nguyen",
            color: "#DE2F92",
            name: "Le fils",
            description: "Thomas a déménagé loin de Québec et entretient peu de liens avec sa mère. Il compte beaucoup sur l’aide de Gabrielle, la voisine de Claire. ",
            image: "/images/Personnages_detourees/04_Nguyen/02_Fils.png",
            image2x: "/images/Personnages_detourees/04_Nguyen/02_Fils@2x.png"
        }, {
            family: "Nguyen",
            color: "#DE2F92",
            name: "La voisine",
            description: "Gabrielle, 29 ans, rend souvent service à sa voisine. Son dicton : « entre voisines, c’est bien normal de s’entraider ». C’est une proche aidante.",
            image: "/images/Personnages_detourees/04_Nguyen/03_Voisine.png",
            image2x: "/images/Personnages_detourees/04_Nguyen/03_Voisine@2x.png"
        }, {
            family: "Nguyen",
            color: "#DE2F92",
            name: "Le voisin",
            description: "Charles a moins de liens avec Claire, mais s’occupe de menus travaux de réparations pour elle. Il souhaite avoir des enfants avec Gabrielle dans les années à venir! ",
            image: "/images/Personnages_detourees/04_Nguyen/04_Voisin.png",
            image2x: "/images/Personnages_detourees/04_Nguyen/04_Voisin@2x.png"
        }, {
            family: "Nguyen",
            color: "#DE2F92",
            name: "L’aide soignante",
            description: "Léa, 32 ans, Elle s’occupe désormais des soins de Claire en venant une fois par semaine. C’est Gabrielle qui a recommandé à Claire de faire appel à ce type de service après un contact avec Info-aidant. ",
            image: "/images/Personnages_detourees/04_Nguyen/05_Aide_soignante.png",
            image2x: "/images/Personnages_detourees/04_Nguyen/05_Aide_soignante@2x.png"
        }, {
            family: "Nguyen",
            color: "#DE2F92",
            name: "La conseillère - Info-aidant",
            description: "Gabrielle l’a appelée récemment pour obtenir des références en matière de transport et d’accompagnement médical. ",
            image: "/images/Personnages_detourees/04_Nguyen/06_Conseillere_IA.png",
            image2x: "/images/Personnages_detourees/04_Nguyen/06_Conseillere_IA@2x.png"
        }, {
            family: "Roy",
            color: "#124F8E",
            name: "La conjointe M.",
            description: "Mayra a été diagnostiquée d’un cancer du sein il y a quelques mois. En pleine chimiothérapie, elle est épuisée. ",
            image: "/images/Personnages_detourees/05_Roy/01_Conjointe.png",
            image2x: "/images/Personnages_detourees/05_Roy/01_Conjointe@2x.png"
        }, {
            family: "Roy",
            color: "#124F8E",
            name: "La conjointe T.",
            description: "Tess est en couple avec Mayra. En ce moment, elle gère le quotidien et toute la logistique pour les soins, tout en étant cheffe d’entreprise. La situation est très difficile pour elle. C’est une proche aidante. ",
            image: "/images/Personnages_detourees/05_Roy/02_Conjointe.png",
            image2x: "/images/Personnages_detourees/05_Roy/02_Conjointe@2x.png"
        }, {
            family: "Roy",
            color: "#124F8E",
            name: "L’associée",
            description: "Émilie est l’associée de Tess et Moussa. Elle prend en charge certaines des missions de Tess, car celle-ci a très peu de temps à consacrer au travail en ce moment.  ",
            image: "/images/Personnages_detourees/05_Roy/03_Associee.png",
            image2x: "/images/Personnages_detourees/05_Roy/03_Associee@2x.png"
        }, {
            family: "Roy",
            color: "#124F8E",
            name: "L’associé",
            description: "Moussa est l’associé de Tess et Émilie. Il est très compréhensif, mais il s’inquiète beaucoup de l’avenir de leur entreprise. Cela génère des discussions compliquées. ",
            image: "/images/Personnages_detourees/05_Roy/04_Associe.png",
            image2x: "/images/Personnages_detourees/05_Roy/04_Associe@2x.png"
        }, {
            family: "Roy",
            color: "#124F8E",
            name: "La belle-mère",
            description: "À 82 ans, Prisha, la maman de Mayra, n’est plus en mesure d’accompagner sa fille au quotidien. Elle reste un soutien moral précieux pour le couple. C’est elle qui a recommandé à Tess de contacter Info-aidant.  ",
            image: "/images/Personnages_detourees/05_Roy/05_Belle_mere.png",
            image2x: "/images/Personnages_detourees/05_Roy/05_Belle_mere@2x.png"
        }, {
            family: "Roy",
            color: "#124F8E",
            name: "Le conseiller - Info-aidant",
            description: "Sur les conseils de Prisha, Tess a demandé à Info-aidant plusieurs informations concernant les solutions fiscales dont elle et Mayra peuvent bénéficier.",
            image: "/images/Personnages_detourees/05_Roy/06_Conseiller_IA.png",
            image2x: "/images/Personnages_detourees/05_Roy/06_Conseiller_IA@2x.png"
        }, {
            family: "Vollant",
            color: "#8DC73F",
            name: "Le grand-père",
            description: "Shapatesh a 77 ans. Ses activités favorites sont le jardinage et la pêche. Suite à une mauvaise chute, il s’est cassé un bras, ce qui le restreint beaucoup.",
            image: "/images/Personnages_detourees/06_Vollant/01_Grand_pere.png",
            image2x: "/images/Personnages_detourees/06_Vollant/01_Grand_pere@2x.png"
        }, {
            family: "Vollant",
            color: "#8DC73F",
            name: "La grand-mère",
            description: "Marjolaine, 76 ans, aime être entourée par sa famille et leur raconter de belles histoires au coin du feu.",
            image: "/images/Personnages_detourees/06_Vollant/02_Grand_mere.png",
            image2x: "/images/Personnages_detourees/06_Vollant/02_Grand_mere@2x.png"
        }, {
            family: "Vollant",
            color: "#8DC73F",
            name: "Le père",
            description: "Pien, 47 ans. Il est féru de technologies et, comme ses parents, il adore les réunions familiales. La chute de son papa l’a inquiété au sujet de l’avenir. C’est un proche aidant.",
            image: "/images/Personnages_detourees/06_Vollant/03_Pere.png",
            image2x: "/images/Personnages_detourees/06_Vollant/03_Pere@2x.png"
        }, {
            family: "Vollant",
            color: "#8DC73F",
            name: "La mère",
            description: "Abey Vollant, 44 ans, est aide-soignante. Ses compétences en santé lui permettent de s’occuper de son beau-père, qui s’est cassé le bras. C’est une proche aidante. ",
            image: "/images/Personnages_detourees/06_Vollant/04_Mere.png",
            image2x: "/images/Personnages_detourees/06_Vollant/04_Mere@2x.png"
        }, {
            family: "Vollant",
            color: "#8DC73F",
            name: "La fille",
            description: "Mali, 23 ans, est la fille de Pien et Abey. Elle a quitté le domicile familial pour s’installer à Ottawa, mais elle revient avec plaisir dès qu’elle a du temps libre.  ",
            image: "/images/Personnages_detourees/06_Vollant/05_Fille.png",
            image2x: "/images/Personnages_detourees/06_Vollant/05_Fille@2x.png"
        }, {
            family: "Vollant",
            color: "#8DC73F",
            name: "La conseillère - Info-aidant",
            description: "Charlène a renseigné Pien sur les solutions qui pourront être mises en place si ses parents perdent en autonomie.",
            image: "/images/Personnages_detourees/06_Vollant/06_Conseillere_IA.png",
            image2x: "/images/Personnages_detourees/06_Vollant/06_Conseillere_IA@2x.png"
        }, {
            family: "Alami",
            color: "#4CA2AE",
            name: "Le père",
            description: "Amir, 72 ans. Atteint de schizophrénie depuis plusieurs années, il est divorcé. Hormis sa fille, il n’a pas de famille proche. ",
            image: "/images/Personnages_detourees/07_Alami/01_Pere.png",
            image2x: "/images/Personnages_detourees/07_Alami/01_Pere@2x.png"
        }, {
            family: "Alami",
            color: "#4CA2AE",
            name: "La fille",
            description: "Nadia Alami, 37 ans. Fille unique, elle s’occupe de son père schizophrène. C’est une proche aidante. ",
            image: "/images/Personnages_detourees/07_Alami/02_Fille.png",
            image2x: "/images/Personnages_detourees/07_Alami/02_Fille@2x.png"
        }, {
            family: "Alami",
            color: "#4CA2AE",
            name: "La confidente - Groupe de soutien",
            description: "C’est une amie que Nadia a rencontré dans un groupe de soutien, car elle ne souhaite pas se confier sur ses problèmes familiaux à ses proches. Info-aidant lui a recommandé l’organisme. ",
            image: "/images/Personnages_detourees/07_Alami/03_Confidente_groupe_de_soutien.png",
            image2x: "/images/Personnages_detourees/07_Alami/03_Confidente_groupe_de_soutien@2x.png"
        }, {
            family: "Alami",
            color: "#4CA2AE",
            name: "L’infirmier - Soins à domicile",
            description: "Grâce aux informations données par Info-aidant, il rend visite tous les jours à Amir afin de vérifier son état mental. En cas de crise, il peut avertir Nadia très rapidement et prendre toutes les mesures nécessaires. ",
            image: "/images/Personnages_detourees/07_Alami/04_Infirmier_soins_a_domicile.png",
            image2x: "/images/Personnages_detourees/07_Alami/04_Infirmier_soins_a_domicile@2x.png"
        }, {
            family: "Alami",
            color: "#4CA2AE",
            name: "La bénévole -  Aide aux repas",
            description: "Elle fait la conversation à Amir lorsqu’elle lui livre ses repas quotidiens. En effet, Nadia a souscrit à un service d’aide aux repas. ",
            image: "/images/Personnages_detourees/07_Alami/05_Benevole_aide_aux_repas.png",
            image2x: "/images/Personnages_detourees/07_Alami/05_Benevole_aide_aux_repas@2x.png"
        }, {
            family: "Alami",
            color: "#4CA2AE",
            name: "La conseillère - Info-aidant",
            description: "Nadia appelle le service dès qu’elle a besoin de parler ou de trouver une ressource. Grâce à Info-aidant, elle a pu s’entourer d’organismes pertinents pour aider son père. ",
            image: "/images/Personnages_detourees/07_Alami/06_Conseillere_IA.png",
            image2x: "/images/Personnages_detourees/07_Alami/06_Conseillere_IA@2x.png"
        }];
        t["a"] = s
    },
    "864c": function(e, t, a) {
        "use strict";
        var s = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "row"
            }, [e._m(0), a("div", {
                staticClass: "col-12 col-md-8 col-lg-6 col-xl-4 mx-auto"
            }, [a("div", {
                staticClass: "bg-white rounded-sm shadow p-5 mt-5"
            }, [a("h3", {
                staticClass: "mb-4"
            }, [e._v("Génération de parties")]), a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.nRooms,
                    expression: "nRooms"
                }],
                staticClass: "form-control mb-3",
                domProps: {
                    value: e.nRooms
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.nRooms = t.target.value)
                    }
                }
            }), a("button", {
                staticClass: "btn btn-primary btn-block mb-3",
                on: {
                    click: e.generateRooms
                }
            }, [e._v("GENERATE")]), a("div", {
                staticClass: "alert alert-danger mb-0"
            }, [e._v(" " + e._s(e.message) + " ")])])]), a("div", {
                staticClass: "col-12 col-md-8 col-lg-6 col-xl-4 mx-auto"
            }, [a("div", {
                staticClass: "bg-white rounded-sm shadow p-5 mt-5"
            }, [a("h3", {
                staticClass: "mb-4"
            }, [e._v("Sound check")]), a("button", {
                staticClass: "btn btn-secondary text-white btn-sm btn-block mb-3",
                on: {
                    click: function(t) {
                        return e.audioPlayers[0].play()
                    }
                }
            }, [e._v("Bulle")]), a("button", {
                staticClass: "btn btn-secondary text-white btn-sm btn-block mb-3",
                on: {
                    click: function(t) {
                        return e.audioPlayers[1].play()
                    }
                }
            }, [e._v("Draw")]), a("button", {
                staticClass: "btn btn-secondary text-white btn-sm btn-block mb-3",
                on: {
                    click: function(t) {
                        return e.audioPlayers[2].play()
                    }
                }
            }, [e._v("Card sound")]), a("button", {
                staticClass: "btn btn-secondary text-white btn-sm btn-block mb-3",
                on: {
                    click: function(t) {
                        return e.audioPlayers[3].play()
                    }
                }
            }, [e._v("Found card")]), a("button", {
                staticClass: "btn btn-secondary text-white btn-sm btn-block mb-3",
                on: {
                    click: function(t) {
                        return e.audioPlayers[4].play()
                    }
                }
            }, [e._v("Famille")]), a("button", {
                staticClass: "btn btn-secondary text-white btn-sm btn-block mb-3",
                on: {
                    click: function(t) {
                        return e.audioPlayers[5].play()
                    }
                }
            }, [e._v("Your turn")])])]), a("div", {
                staticClass: "col-12 col-md-8 col-lg-6 col-xl-4 mx-auto"
            }, [a("div", {
                staticClass: "bg-white rounded-sm shadow p-5 mt-5"
            }, [a("h3", {
                staticClass: "mb-4"
            }, [e._v("Sound check dans JS")]), a("button", {
                staticClass: "btn btn-secondary text-white btn-sm btn-block mb-3",
                on: {
                    click: function(t) {
                        return e.playAudioFiles(0)
                    }
                }
            }, [e._v("Bulle")]), a("button", {
                staticClass: "btn btn-secondary text-white btn-sm btn-block mb-3",
                on: {
                    click: function(t) {
                        return e.playAudioFiles(1)
                    }
                }
            }, [e._v("Draw")]), a("button", {
                staticClass: "btn btn-secondary text-white btn-sm btn-block mb-3",
                on: {
                    click: function(t) {
                        return e.playAudioFiles(2)
                    }
                }
            }, [e._v("Card sound")]), a("button", {
                staticClass: "btn btn-secondary text-white btn-sm btn-block mb-3",
                on: {
                    click: function(t) {
                        return e.playAudioFiles(3)
                    }
                }
            }, [e._v("Found card")]), a("button", {
                staticClass: "btn btn-secondary text-white btn-sm btn-block mb-3",
                on: {
                    click: function(t) {
                        return e.playAudioFiles(4)
                    }
                }
            }, [e._v("Famille")]), a("button", {
                staticClass: "btn btn-secondary text-white btn-sm btn-block mb-3",
                on: {
                    click: function(t) {
                        return e.playAudioFiles(5)
                    }
                }
            }, [e._v("Your turn")])])])])])])
        }
          , i = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "col-12"
            }, [a("h1", {
                staticClass: "text-white mt-5"
            }, [e._v("Test page")])])
        }
        ]
          , r = (a("d81d"),
        {
            name: "Test",
            props: ["player"],
            data: function() {
                return {
                    nRooms: 0,
                    message: "0 rooms générées",
                    audioFiles: ["/sounds/bulle.mp3", "/sounds/draw.mp3", "/sounds/card-sound.mp3", "/sounds/found-card.mp3", "/sounds/famille.mp3", "/sounds/your-turn.mp3"],
                    audioPlayers: []
                }
            },
            methods: {
                generateRooms: function() {
                    this.$store.socket.emit("admin:simulation", {
                        rooms: this.nRooms
                    }),
                    this.message = this.nRooms + " rooms générées",
                    this.nRooms = 0
                },
                playAudioFiles: function(e) {
                    new Audio(this.audioFiles[e]).play()
                }
            },
            mounted: function() {
                this.audioPlayers = this.audioFiles.map((function(e) {
                    var t = new Audio;
                    return t.src = e,
                    t
                }
                ))
            }
        })
          , o = r
          , l = a("2877")
          , n = Object(l["a"])(o, s, i, !1, null, null, null);
        t["a"] = n.exports
    },
    "9c0c": function(e, t, a) {},
    ac77: function(e, t, a) {
        "use strict";
        var s = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("div", {
                staticClass: "row align-items-center"
            }, [a("div", {
                staticClass: "col-auto mt-3 mt-md-4 mb-md-3"
            }, [a("img", {
                attrs: {
                    src: "/images/Logo_jeu_fondFonce.png",
                    width: "132px",
                    height: "90px",
                    srcset: "/images/Logo_jeu_fondFonce@2x.png 2x",
                    alt: "Logo Appui jeu des 7 familles"
                },
                on: {
                    click: function(t) {
                        !e.notStarted && (e.$store.display.modalLeave = !0)
                    }
                }
            })]), a("div", {
                staticClass: "col-auto ml-auto"
            }, [a("button", {
                staticClass: "btn btn-light py-2 px-3 d-flex align-items-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.menu = !0
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_menu.svg",
                    alt: "Icone menu jeu Appui 7 familles",
                    width: "22px",
                    height: "18px"
                }
            }), e._v(" Menu ")])])]), a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [a("Menu", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.$store.display.menu,
                    expression: "$store.display.menu"
                }],
                attrs: {
                    notStarted: e.notStarted
                }
            })], 1)], 1)
        }
          , i = []
          , r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "position-fixed bg-white menu w-100 h-100"
            }, [a("div", {
                staticClass: "row h-100 mx-0"
            }, [a("div", {
                staticClass: "col-12 px-0"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "row align-items-center"
            }, [a("div", {
                staticClass: "col-auto mt-3 mt-md-4 mb-md-3"
            }, [a("img", {
                attrs: {
                    src: "/images/Logo_jeu_fondBlanc.png",
                    srcset: "/images/Logo_jeu_fondBlanc@2x.png 2x",
                    alt: "Logo Appui jeu des 7 familles",
                    width: "132px",
                    height: "90px"
                },
                on: {
                    click: function(t) {
                        !e.notStarted && (e.$store.display.modalLeave = !0)
                    }
                }
            })]), a("div", {
                staticClass: "col-auto ml-auto"
            }, [a("button", {
                staticClass: "btn btn-outline-dark py-2 px-3 d-flex align-items-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.menu = !1
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_close.svg",
                    alt: "Icone fermer menu Appui jeu 7 familles",
                    width: "18px",
                    height: "18px"
                }
            }), e._v(" Fermer ")])])])])]), a("div", {
                staticClass: "col-12 px-0 align-self-center"
            }, [a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "row pb-4"
            }, [a("div", {
                staticClass: "col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto"
            }, [e.notStarted ? e._e() : a("p", {
                staticClass: "font-weight-semibold text-center"
            }, [e._v("Partie en cours...")]), a("button", {
                staticClass: "btn btn-sm btn-primary btn-block mb-3",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.menu = !1
                    }
                }
            }, [e.notStarted ? a("span", [e._v("Jouer une partie")]) : a("span", [e._v("Retourner à la partie")])]), a("button", {
                staticClass: "btn btn-sm btn-info btn-block mb-3 d-flex align-items-center justify-content-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.rules = !0
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_rules.svg",
                    alt: "Icone règles du jeu Appui 7 familles",
                    width: "20.81px",
                    height: "17.97px"
                }
            }), e._v(" Règles du jeu ")]), a("button", {
                staticClass: "btn btn-sm btn-info btn-block mb-3 d-flex align-items-center justify-content-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.families = !0
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_familles.svg",
                    alt: "Icones famille jeu Appui",
                    width: "19.34px",
                    height: "17.98px"
                }
            }), e._v(" Tableau des familles ")]), e.notStarted ? e._e() : a("button", {
                staticClass: "btn btn-sm btn-outline-primary btn-block mb-2 d-flex align-items-center justify-content-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalLeave = !0
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_door.svg",
                    alt: "icone exit jeu Appui"
                }
            }), e._v(" Quitter la partie ")])])])])]), a("div", {
                staticClass: "col-12 px-0 align-self-end"
            }, [a("div", {
                staticClass: "bg-primary-light w-100"
            }, [a("div", {
                staticClass: "container py-4"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto"
            }, [a("p", {
                staticClass: "text-center"
            }, [e._v("Si vous souhaitez contacter Info-aidant :")]), a("a", {
                staticClass: "btn btn-sm btn-light btn-block d-flex align-items-center justify-content-center",
                attrs: {
                    href: "tel:1 855 852-7784"
                },
                on: {
                    click: e.triggerCall
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_phone.svg",
                    alt: "icone téléphone Appui",
                    width: "18px",
                    height: "18px"
                }
            }), e._v(" 1 855 852-7784 ")]), a("button", {
                staticClass: "btn btn-sm btn-light btn-block mt-3 d-flex align-items-center justify-content-center",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.$store.display.modalAppui = !0
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_external_link.svg",
                    alt: "icone lien externe Appui.org",
                    width: "18px",
                    height: "18px"
                }
            }), e._v(" lappui.org ")]), a("button", {
                staticClass: "btn btn-sm btn-light btn-block mt-3 d-flex align-items-center justify-content-center",
                on: {
                    click: function(t) {
                        e.$store.display.about = !0
                    }
                }
            }, [a("img", {
                staticClass: "mr-2",
                attrs: {
                    src: "/images/pictos/ic_infos.svg",
                    alt: "Icone à propos jeu Appui",
                    width: "18px",
                    height: "18px"
                }
            }), e._v(" À propos du projet ")]), e._m(0)])])])])])])])
        }
          , o = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "my-4 text-center"
            }, [a("p", {
                staticClass: "mb-1 font-weight-light"
            }, [e._v("Présenté par :")]), a("img", {
                attrs: {
                    src: "/images/logodesjardinsvert.svg",
                    alt: ""
                }
            })])
        }
        ]
          , l = {
            name: "Menu",
            props: ["notStarted"],
            methods: {
                triggerCall: function() {
                    this.$gtm.trackEvent({
                        event: "telephone"
                    })
                }
            }
        }
          , n = l
          , c = a("2877")
          , d = Object(c["a"])(n, r, o, !1, null, null, null)
          , m = d.exports
          , u = {
            name: "Header",
            props: ["notStarted"],
            components: {
                Menu: m
            }
        }
          , p = u
          , g = Object(c["a"])(p, s, i, !1, null, null, null);
        t["a"] = g.exports
    },
    b233: function(e, t, a) {
        "use strict";
        var s = {
            socket: "",
            selfPlayer: {
                playername: "",
                playerID: "",
                bot: !1,
                cards: [],
                score: 0,
                profilePicture: 0
            },
            players: [{
                playername: "",
                playerID: "",
                bot: !1,
                nCards: 0,
                score: 0,
                profilePicture: 0
            }],
            display: {
                modalShare: !1,
                modalWaitOthers: !1,
                modalPlayerLeave: !1,
                modalGameDeleted: !1,
                modalCardDetails: !1,
                modalYourTurn: !1,
                modalLeave: !1,
                modalGameOver: !1,
                modalGameRestarted: !1,
                modalAppui: !1,
                rules: !1,
                about: !1,
                families: !1,
                menu: !1,
                mycards: !1,
                tutorial: !0
            },
            gameLogic: {
                deck: 0,
                actualTurn: 1,
                score: 0,
                playerLimit: 4,
                playerLayout: [],
                playerOrder: [],
                statut: "starting",
                askToPlayer: {},
                onlyBot: !1,
                action: {
                    fromPlayerID: "",
                    toPlayerID: "",
                    cardID: "0",
                    cardName: "",
                    cardFamily: ""
                }
            }
        };
        t["a"] = s
    },
    ddb8: function(e, t, a) {
        "use strict";
        var s = a("9483");
        Object(s["a"])("".concat("/", "service-worker.js"), {
            ready: function() {},
            registered: function() {},
            cached: function() {},
            updatefound: function() {},
            updated: function() {},
            offline: function() {},
            error: function(e) {
                console.error("Error during service worker registration:", e)
            }
        })
    }
});
//# sourceMappingURL=app.00175911.js.map
