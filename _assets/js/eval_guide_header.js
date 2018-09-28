// http://mendixnew.staging.wpengine.com/wp-json/menus/v1/menus/1378?_jsonp=callback

((function($) {

    var URL = 'https://mendix.com/wp-json/menus/v1/menus/1378';
    var $mainNav = $('#menu-navigation');
    var $footNav = $('#menu-navigation-1');

    var items = [];
    var topLevel = [];

    function sortOnMenuOrder(a, b) {
        if (a.menu_order < b.menu_order) return -1;
        if (a.menu_order > b.menu_order) return 1;
        return 0;
    }

    function getSubItems(link) {
        var ID = link.ID + '';
        return items.filter(function (item) {
            return ID === item.menu_item_parent;
        });
    }

    function appendSubMenu($menu, items) {
        var $list = $('<ul class="sub-menu" aria-label="submenu" aria-hidden="true"></ul>');

        items.forEach(function (item) {
            var $li = $('<li id="menu-item-' + item.ID + '" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-' + item.ID + '"></li>');
            var subitems = getSubItems(item);

            $li.append('<a href="' + item.url + '" aria-haspopup="true">' + item.title + '</a>');

            $list.append($li);

            if (subitems && subitems.length) {
                $li.addClass('menu-item-has-children');
                appendSubMenu($li, subitems);
            }
        });

        $menu.append($list);
    }

    function addTopLevelLink(link) {
        var subitems = getSubItems(link);

        var $li = $('<li id="menu-item-' + link.ID + '" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-' + link.ID + '"></li>');
        var $bottomli = $('<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-' + link.ID + '"></li>');

        var $mobilePlus = $('<a href="' + link.url + '" aria-haspopup="true">' + link.title + '</a>');
        $li.append($mobilePlus);
        $bottomli.append('<a href="#" aria-haspopup="true">' + link.title + '</a>');

        $mainNav.append($li);
        $footNav.append($bottomli);

        $mobilePlus.on('click', function () {
            var $this = $(this);
            var $submenu = $this.parent().find('> ul.sub-menu');
            if ($(window).width() < 1100 && $submenu) {
                if ($submenu.hasClass('shown')) {
                    $submenu.hide(250);
                    $submenu.toggleClass('shown', false);
                } else {
                    $submenu.show(250);
                    $submenu.toggleClass('shown', true);
                }
            }
        })

        if (subitems && subitems.length) {
            $li.addClass('menu-item-has-children');
            $bottomli.addClass('menu-item-has-children');
            appendSubMenu($li, subitems);
            appendSubMenu($bottomli, subitems);
        }
    }

    function buildMenu(response) {
        items = response.items;
        topLevel = items.filter(function (item) {
            return '0' === item.menu_item_parent;
        }).sort(sortOnMenuOrder);

        topLevel.forEach(addTopLevelLink);
    }

    $.ajax({
        url: URL,
        jsonp: '_jsonp',
        jsonpCallback: 'corporate_menu',
        cache: true,
        dataType: 'jsonp',
        success: buildMenu
    });

})(jQuery));
