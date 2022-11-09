$('.menu .item').tab({});
$('.menu .item').each(function () {
    let $tabItemMenu = $(this);

    $tabItemMenu.click(function () {
        let $tabItem = $(this);
        let $tabAtribute = $tabItem.attr("data-tab");
        let $tabsActive = $(`.tab[data-tab="${$tabAtribute}"]`);
        let $tabsChild = $tabsActive.find(".tabs__item--active");
        $('iframe').attr('src', `${$tabAtribute}.info/${$tabsChild.text().toLowerCase()}/${$tabsChild.text().toLowerCase()}.html`)

    })

    $(".tabs").each(function () {
        let $tabs = $(this),
            $tabsItem = $tabs.children(".tabs__item");

        $tabsItem.click(function () {
            let $currentTab = $(this),
                $valueUnit = this.textContent.toLowerCase(),
                $valueTab = this.parentNode.parentNode.getAttribute('data-tab');
            $('iframe').attr('src', `${$valueTab}.info/${$valueUnit}/${$valueUnit}.html`)

            $tabsItem.removeClass("tabs__item--active");

            setTimeout(function () {
                $currentTab.addClass("tabs__item--active");

            }, 100);

        });
    });
});