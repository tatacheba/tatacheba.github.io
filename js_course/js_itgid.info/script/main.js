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

function swapHeadAndTail(arr) {
    let arrStart = arr.slice(0, Math.floor(arr.length / 2));
    let arrEnd = arr.slice(Math.ceil(arr.length / 2), arr.length);
    arr.splice(0, arrEnd.length, ...arrEnd)
    arr.splice(Math.ceil(arr.length / 2), arr.length, ...arrStart);

    // good luck
}

function sumStrings(a, b) {
    console.log(BigInt(a));
    console.log(BigInt(b));
    console.log((BigInt(a) + BigInt(b)).toString().slice(0, -1));
    // return (+a + +b).toFixed(100).toString();
}

function incrementString(strng) {
    // let numb = /\d+/;
    let strArr = Array.from(strng);
    if (!isNaN(strArr[strArr.length - 1])) {
        return strng.replace(/\d+$/, m => `${+m + 1}`.padStart(m.length, 0))
    } else {
        strArr.push(1);
        return strArr.join('');
    }
}
// console.log(incrementString('foobar000'))

// let list = '1-kiwi 2-pear 3-kiwi 4-banana 5-melon 6-banana 7-melon 8-pineapple 9-apple 10-pineapple 11-cucumber 12-pineapple 13-cucumber 14-orange 15-grape 16-orange 17-grape 18-apple 19-grape 20-cherry 21-pear 22-cherry 23-pear 24-kiwi 25-banana 26-kiwi 27-apple 28-melon 29-banana 30-melon 31-pineapple 32-melon 33-pineapple 34-cucumber 35-orange 36-apple 37-orange 38-grape 39-orange 40-grape 41-cherry 42-pear 43-cherry 44-pear 45-apple 46-pear 47-kiwi 48-banana 49-kiwi 50-banana 51-melon 52-pineapple 53-melon 54-apple 55-cucumber 56-pineapple 57-cucumber 58-orange 59-cucumber 60-orange 61-grape 62-cherry 63-apple 64-cherry 65-pear 66-cherry 67-pear 68-kiwi 69-pear 70-kiwi 71-banana 72-apple 73-banana 74-melon 75-pineapple 76-melon 77-pineapple 78-cucumber 79-pineapple 80-cucumber 81-apple 82-grape 83-orange 84-grape 85-cherry 86-grape 87-cherry 88-pear 89-cherry 90-apple 91-kiwi 92-banana 93-kiwi 94-banana 95-melon 96-banana 97-melon 98-pineapple 99-apple 100-pineapple ';
// let listOb = {};
// list = list.split(' ').map(e => {
//     e = e.split('-');
//     listOb[e[0]] = e[1];
// });
// console.log(listOb);

function SubtractSum(n) {
    let list = '1-kiwi 2-pear 3-kiwi 4-banana 5-melon 6-banana 7-melon 8-pineapple 9-apple 10-pineapple 11-cucumber 12-pineapple 13-cucumber 14-orange 15-grape 16-orange 17-grape 18-apple 19-grape 20-cherry 21-pear 22-cherry 23-pear 24-kiwi 25-banana 26-kiwi 27-apple 28-melon 29-banana 30-melon 31-pineapple 32-melon 33-pineapple 34-cucumber 35-orange 36-apple 37-orange 38-grape 39-orange 40-grape 41-cherry 42-pear 43-cherry 44-pear 45-apple 46-pear 47-kiwi 48-banana 49-kiwi 50-banana 51-melon 52-pineapple 53-melon 54-apple 55-cucumber 56-pineapple 57-cucumber 58-orange 59-cucumber 60-orange 61-grape 62-cherry 63-apple 64-cherry 65-pear 66-cherry 67-pear 68-kiwi 69-pear 70-kiwi 71-banana 72-apple 73-banana 74-melon 75-pineapple 76-melon 77-pineapple 78-cucumber 79-pineapple 80-cucumber 81-apple 82-grape 83-orange 84-grape 85-cherry 86-grape 87-cherry 88-pear 89-cherry 90-apple 91-kiwi 92-banana 93-kiwi 94-banana 95-melon 96-banana 97-melon 98-pineapple 99-apple 100-pineapple ';
    let listOb = {};
    list = list.split(' ').map(e => {
        e = e.split('-');
        listOb[e[0]] = e[1];
    });

    return findSum(n);

    function findSum(nv) {
        let numAr = Array.from(String(nv), Number);
        let newN = nv - numAr.reduce((a, i) => a + i);
        if (newN <= 100) {
            console.log(listOb[newN]);
            return listOb[newN];
        } else {
            return findSum(newN)
        };
    }
}
/*A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.*/
function solution(list) {
    let numStart;

    let newArr = [];

    function findNumEnd(start, end) {
        // console.log("start " + start);
        // console.log("end " + end);

        let numEnd;
        if (start == end + 1) {

            numEnd = end;
            start++;
            return findNumEnd(start, numEnd);
            // newArr.splice(-1, 1, `${numStart}-${numEnd}`);
        } else {
            return numEnd;
        }
    }
    for (let i = 0; i < list.length - 1; i++) {
        console.log(list[i])
        console.log(findNumEnd(list[i], list[i + 1]))
        newArr.push(findNumEnd(list[i], list[i + 1]));
    }

    return newArr;
    // TODO: complete solution 

}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// console.log(SubtractSum(1044));
// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
// console.log(swapHeadAndTail([1, 2, -3, 4, 5, 6, -7, 8]));
// console.log("Basic tests", () => {
//     Test.assertSimilar(swapHeadAndTail([1, 2, 3, 4, 5]), [4, 5, 3, 1, 2]);
//     Test.assertSimilar(swapHeadAndTail([-1, 2]), [2, -1]);
//     Test.assertSimilar(swapHeadAndTail([1, 2, -3, 4, 5, 6, -7, 8]), [5, 6, -7, 8, 1, 2, -3, 4]);
// });