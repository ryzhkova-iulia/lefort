({
    block: 'page',
    title: 'Lefortovo',
    styles: [
        {elem: 'css', url : "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700&subset=cyrillic"},
        {elem: 'css', url: 'fonts/stylesheet.css'},
        {elem: 'css', url: 'index.min.css'}
    ],
    scripts: [
        {tag : 'script', attrs : {src : 'index.min.js'}}
    ],
    content: [
        {
            block: 'header',
            tag: 'header',
            content: {
                block: 'inner',
                mix: {block: 'clear'},
                content: [
                    {
                        block: "header-info",
                        content: [
                            {
                                elem: "telephone",
                                tag: "a",
                                attrs: {href: "tel:+7(495) 988-44-22"},
                                content: "+7(495) 988-44-22"
                            },
                            {
                                elem: "feedback",
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Оставить заявку"
                            }
                        ]
                    },
                    {
                        block: 'header-contacts',
                        mix: {block: 'clear'},
                        content: [
                            {
                                tag: 'address',
                                elem: 'address',
                                content: 'Москва, пер. Солдатский, д. 26'
                            },
                            {
                                elem: 'map',
                                tag: "a",
                                attrs: {href: "#"},
                                content: 'Как проехать'
                            }
                        ]
                    },
                    {
                        block: "logo",
                        tag: "a",
                        attrs: {href: "#"}
                    },
                ]
            }
        },
        {
            block: "wrapp-menu",
            content: {
                block: "menu",
                mix: {block: 'clear'},
                tag: "ul",
                content: [
                    {
                        elem: 'item',
                        tag: 'li',
                        content: {
                            elem: 'link',
                            tag: "a",
                            attrs: {href: "#"},
                            content: "О КОМПЛЕКСЕ"
                        }
                    },
                    {
                        elem: 'item',
                        tag: 'li',
                        content: {
                            elem: 'link',
                            tag: "a",
                            attrs: {href: "#"},
                            content: "РАСПОЛОЖЕНИЕ"
                        }
                    },
                    {
                        elem: 'item',
                        tag: 'li',
                        content: {
                            elem: 'link',
                            tag: "a",
                            attrs: {href: "#"},
                            content: "В НАЛИЧИЕ"
                        }
                    },
                    {
                        elem: 'item',
                        tag: 'li',
                        mix: {elem: 'flipper'},
                        content: {
                            elem: 'link',
                            tag: "a",
                            attrs: {href: "#"},
                            content: "ПЛАНИРОВКА"
                        }
                    },
                    {
                        elem: 'item',
                        tag: 'li',
                        content: {
                            elem: 'link',
                            tag: "a",
                            attrs: {href: "#"},
                            content: "ИППОТЕКА"
                        }
                    },
                    {
                        elem: 'item',
                        tag: 'li',
                        content: {
                            elem: 'link',
                            tag: "a",
                            attrs: {href: "#"},
                            content: "КОНТАКТЫ"
                        }
                    }
                ]
            }
        },
        {
            block: "layout",
            content: {
                elem: "inner",
                content:
                [
                    {
                        block: "place-list",
                        tag: "ul",
                        content: [
                            {
                                elem: "item",
                                mods: {icon: "subway"},
                                tag: "li",
                                content: "Открытие станции <br> метро «Лефортово»"
                            },
                            {
                                elem: "item",
                                mods: {icon: "district"},
                                tag: "li",
                                content: "Престижный район <br> Москвы»"
                            },
                            {
                                elem: "item",
                                mods: {icon: "park"},
                                tag: "li",
                                content: "Близость к парку <br> «Лефортово» <br> и набережной реки Яузы"
                            },
                            {
                                elem: "item",
                                mods: {icon: "available"},
                                tag: "li",
                                content: "Квартиры в наличии <br> от 38 до 120 м2"
                            },
                            {
                                elem: "item",
                                mods: {icon: "infrastructure"},
                                tag: "li",
                                content: "Сложившаяся <br> инфраструктура <br> столичного района»"
                            },
                            {
                                elem: "item",
                                mods: {icon: "parking"},
                                tag: "li",
                                content: "Двухуровневая <br> подземная автостоянка"
                            },
                            {
                                elem: "item",
                                mods: {icon: "education"},
                                tag: "li",
                                content: "Комплекс внеклассного <br> образования"
                            }
                        ]
                    },
                    {
                        elem: "title",
                        content: "Квартиры в историческом центре"
                    },
                    {
                        elem: "subtitle",
                        content: "от <span>139 000</span> руб./м2 "
                    },
                    {
                        block: "date",
                        content: [
                            {
                                elem: "title",
                                content: "Повышение<br>цен"
                            },
                            "<span>12</span> ",

                            {
                                elem : 'month',
                                content : 'ноября'
                            }
                        ]

                    },
                    {
                        block: "web-camera",
                        content: {
                            elem : "text",
                            tag : "a",
                            attrs : {href : "#"},
                            content : 'Веб-камера<br>на объекте'
                        }
                    },
                    {
                        block: "news",
                        shouldDeps: [
                            {block: 'owl-carousel2'}
                        ],
                        content: [
                            {
                                elem: "title",
                                tag: "h3",
                                content: "НОВОСТИ"
                            },
                            {
                                elem : "carousel",
                                cls : "owl-carousel owl-theme",
                                content : [
                                    {
                                        elem : 'item',
                                        content : [
                                            {
                                                elem : 'date',
                                                content : '17/10/14'
                                            },
                                            {
                                                elem : 'item-title',
                                                tag : 'a',
                                                attrs : {href : '#'},
                                                content : 'Жилой комплекс «Лефорт» новая история Москвы'
                                            },
                                            {
                                                elem : 'desc',
                                                content : 'Люди активно продают свои квартиры на вторичном рынке, чтобы взамен приобрести новое жилье. Взаимозачет, а именно'
                                            }
                                        ]
                                    },
                                    {
                                        elem : 'item',
                                        content : [
                                            {
                                                elem : 'date',
                                                content : '17/10/14'
                                            },
                                            {
                                                elem : 'item-title',
                                                tag : 'a',
                                                attrs : {href : '#'},
                                                content : 'Жилой комплекс «Лефорт» новая история Москвы 2'
                                            },
                                            {
                                                elem : 'desc',
                                                content : 'Люди активно продают свои квартиры на вторичном рынке, чтобы взамен приобрести новое жилье. Взаимозачет, а именно'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: "wrapp-menu",
            mods: {"sub-menu": true},
            content: {
                block: "menu",
                mix: {block: 'clear'},
                tag: "ul",
                content: [
                    {
                        elem: 'item',
                        tag: 'li',
                        content: {
                            elem: 'link',
                            tag: "a",
                            attrs: {href: "#"},
                            content: "ХОД СТРОИТЕЛЬСТВА"
                        }
                    },
                    {
                        elem: 'item',
                        tag: 'li',
                        content: {
                            elem: 'link',
                            tag: "a",
                            attrs: {href: "#"},
                            content: "НОВОСТИ"
                        }
                    },
                    {
                        elem: 'item',
                        tag: 'li',
                        content: {
                            elem: 'link',
                            tag: "a",
                            attrs: {href: "#"},
                            content: "ВЗАИМОЗАЧЕТ"
                        }
                    },
                    {
                        elem: 'item',
                        tag: 'li',
                        content: {
                            elem: 'link',
                            tag: "a",
                            attrs: {href: "#"},
                            content: "МАШИНОМЕСТА"
                        }
                    },
                    {
                        elem: 'item',
                        tag: 'li',
                        content: {
                            elem: 'link',
                            tag: "a",
                            attrs: {href: "#"},
                            content: "ДОКУМЕНТЫ"
                        }
                    },
                    {
                        elem: 'item',
                        tag: 'li',
                        content: {
                            elem: 'link',
                            tag: "a",
                            attrs: {href: "#"},
                            content: "НЕЖИЛИЫ ПОМЕЩЕНИЯ"
                        }
                    },
                    {
                        elem: 'item',
                        tag: 'li',
                        content: {
                            elem: 'link',
                            tag: "a",
                            attrs: {href: "#"},
                            content: "КОНУЧАСТНИКИ"
                        }
                    }

                ]
            }
        },
        {
            block: "sub-menu_line",
            content: [
                {
                    elem: "repeat-white",
                },
                {
                    elem: "repeat-grey",
                },
                {
                    elem: "main-line",
                }
            ]
        },
        {
            block : "content",
            content : [
                {
                    elem : 'title',
                    tag : 'h1',
                    content : '«НДВ-Недвижимость» представляет новый проект «Лефорт» в одном из старейших исторических районов Москвы, который отличается прекрасной сложившейся инфраструктурой и удобной транспортной системой.'
                },
                "Новый комплекс состоит из двух корпусов, каждый - по 17 этажей. Эти здание созданы по оригинальному проекту одного из лучших столичных архитектурных бюро, специалисты которого проектировали знаменитые сталинские высотки. Исторический монументализм XXI века вышел на совершенно другой уровень. Прочные стены и плавные изгибы зданий создают неповторимый облик нового города. Дома, созданные в лучших традициях русской архитектурной школы, разработаны с учетом современных технологий и самых актуальных урбанистических тенденций."
            ]
        },
        {
            block: "footer",
            tag: "footer",
            content: {
                block: "footer-inner",
                mix: {block: 'clear'},
                content: [
                    {
                       block: "small-block",
                       content: [
                           {
                               elem: "title",
                               tag: "a",
                               attrs: {href: "#"},
                               content: "НДВ Недвижимость"
                           },
                           {
                               elem: "phone",
                               tag: "a",
                               attrs: {href: "tel:+7(495) 988-44-22"},
                               content: "+7(495) 988-44-22"
                           }
                       ]
                    },
                    {
                        block: "small-block",
                        mods: {template: "only-title"},
                        content: [
                            {
                                elem: "title",
                                tag: "span",
                                content: "Центральный офис: <br> м.Трубная, Трубная пл., д.2"
                            }
                        ]
                    },
                    {
                        block: "small-block",
                        mods: {template: "line-single"},
                        content: [
                            {
                                elem: "title",
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Офисы НДВ"
                            }
                        ]
                    },
                    {
                        block: "small-block",
                        mods: {template: "align"},
                        content: [
                            {
                                elem: "img",
                                tag: "img",
                                attrs: {src: "./img/logo-ndv-footer.png"}
                            },
                            {
                                elem: "desc",
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Эксклюзивный <br> продавец"
                            }
                        ]
                    },
                    {
                        block: "small-block",
                        content: [
                            {
                                elem: "img",
                                tag: "img",
                                attrs: {src: "./img/interflora-icon.png"}
                            },
                            {
                                elem: "desc",
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Застройщик"
                            }
                        ]
                    },
                    {
                        block: "small-block",
                        content: [
                            {
                                elem: "img",
                                tag: "img",
                                attrs: {src: "./img/mosproect-icon.png"}
                            },
                            {
                                elem: "desc",
                                tag: "a",
                                attrs: {href: "#"},
                                content: "Проектировщик"
                            }
                        ]
                    }
                ]
            }
        }
    ]
})
;
