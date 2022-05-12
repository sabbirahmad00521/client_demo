function PlayerCard(player) {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    let cash = formatter.format(player.PlayerData.money.cash);
    let bank = formatter.format(player.PlayerData.money.bank);


    return `
        <div class="card ${player.PlayerData.citizenid}">
            <div class="card-header">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#pc${player.PlayerData.citizenid}">
                        <a class="fav-btn" href=""><i class="far fa-star"></i></a> ${player.PlayerData.name}
                    </button>
                </h5>
            </div>

            <div id="pc${player.PlayerData.citizenid}" class="collapse" data-parent="#menu-items">
                <div class="card-body">
                    <p>Id: ${player.PlayerData.source}</p>
                    <p>CID: ${player.PlayerData.citizenid}</p>
                    <p>License: ${player.PlayerData.license}</p>
                    <br />
                    
                    <p>Character: ${player.PlayerData.charinfo.firstname} ${player.PlayerData.charinfo.lastname}</p>
                    <p>Cash: ${cash}</p>
                    <p>Bank: ${bank}</p>
                    <p></p>
                    <div class="d-flex justify-content-between">
                        <button onclick="Bring(${player.PlayerData.source})" class="btn-blue">Bring</button>
                        <button onclick="GoTo(${player.PlayerData.source})" class="btn-blue">Go To</button>
                        <button onclick="Spectate(${player.PlayerData.source})" class="btn-blue">Spectate</button>
                        <button onclick="Kick(${player.PlayerData.source})" class="btn-blue">Kick</button>
                    </div>
                </div>
            </div>
        </div>
    `
}

function PlayerOption(player) {
    return `<option class="${player.PlayerData.citizenid}" value="${player.PlayerData.citizenid}">${player.PlayerData.source} | ${player.PlayerData.charinfo.firstname} ${player.PlayerData.charinfo.lastname} | ${player.PlayerData.citizenid} </option>`
}

let players = new Set()
let allPlayers = [];

function AddPlayer(player) {
    $('#leftTwo').append(PlayerCard(player));
    $('.playermultiselect').append(PlayerOption(player))
}

function RemovePlayer(player) {
    console.log('remove')
    $('.' + player.PlayerData.citizenid).remove();
}

function Bring(target) {
    fetch(`https://${GetParentResourceName()}/bring`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            target
        })
    });
}

function GoTo(target) {
    fetch(`https://${GetParentResourceName()}/goto`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            target
        })
    });
}

function Spectate(target) {
    fetch(`https://${GetParentResourceName()}/spectate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            target
        })
    });
}

function Kick(target) {
    fetch(`https://${GetParentResourceName()}/kick`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            target
        })
    });
}

window.addEventListener('message', function(event) {
    var action = event.data.action;
    switch (action) {
        case "toggle":
            if (event.data.show)
                $(".menu").show()
            else
                $(".menu").hide()
            break;
        case "players":
            console.log("players")
            let currentPlayers = new Set()
            if (event.data.players && Array.isArray(event.data.players)) {

                event.data.players = event.data.players.filter(p => p);

                for (let i = 0; i < event.data.players.length; i++) {
                    const player = event.data.players[i];
                    if (!player) continue;
                    currentPlayers.add(player.PlayerData.citizenid);
                }

                let toRemove = new Set(
                    [...players].filter(element => !currentPlayers.has(element))
                );

                for (let player of event.data.players) {
                    if (!players.has(player.PlayerData.citizenid)) {
                        players.add(player.PlayerData.citizenid);
                        AddPlayer(player);
                    }
                }

                let arrToRemove = [...toRemove]
                for (let i = 0; i < arrToRemove.length; i++) {
                    let cid = arrToRemove[i];
                    RemovePlayer(event.data.players.find(p => p.PlayerData.citizenid == cid))
                }

                allPlayers = event.data.players;
            }
    }
});

jQuery(document).ready(function($) {
    // sorting code
    $('#menu-items .card:not(.favoritelist)').sort(function(a, b) {
        if (a.textContent.trim().slice(0, 25) < b.textContent.trim().slice(0, 25)) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#menu-items');

    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            fetch(`https://${GetParentResourceName()}/hide`, {
                method: 'POST'
            });
        }
    });

    //$(".menu").hide()

    $("#leftbg").click(function() {
        fetch(`https://${GetParentResourceName()}/enableInput`, {
            method: 'POST'
        });
    });

    $('.menu').on('click', function(event) {
        fetch(`https://${GetParentResourceName()}/disableInput`, {
            method: 'POST'
        });
    });

    // reset opened items
    $('.top-filter a').click(function() {
        $('.main-menu button').addClass('collapsed')
        $('.main-menu .collapse').removeClass('show')

    })

    // function of adding menu to favorite filter
    $('#menu-items .fav-btn').click(function() {
        if ($(this).children('i').hasClass('far')) {

            // item pin to top
            $(this).parent().closest('.card').detach().prependTo('#menu-items')

            // add class for sort 
            $(this).parent().closest('.card').addClass('favoritelist')

            // clone clicked menu item when clicked on star button
            var element = $(this).parent().closest('.card').clone();

            // change classes and some attribute to work fine on fav
            var new_id = element.find(".collapse").attr('id') + "Fav";
            element.find(".collapse").attr('id', new_id)
            element.find(".collapse").attr('data-parent', "#fav-items")
            element.find(".btn-link").attr('data-target', "#" + new_id)
            element.find(".fav-btn i").removeClass('far').addClass('fas')


            // append cloned menu item in fav
            $('#fav-items').append(element);

            // change star icon
            $(this).children('i').removeClass('far').addClass('fas');

        } else if ($(this).children('i').hasClass('fas')) {

            if ($(this).parent().closest('.card').hasClass('only-btn')) {
                var onlyBtnID = $(this).attr('id')
                $('#fav-items').find("#" + onlyBtnID).parent().closest('.card').remove()
            }

            // clone clicked menu item when clicked on star button
            var element = $(this).parent().closest('.card').clone();
            // find class of clicked star
            var new_id = element.find(".collapse").attr('id') + "Fav";
            // find parent of that class and remove parent
            $('#' + new_id).parent().closest('.card').remove()
            // change star icon
            $(this).children('i').removeClass('fas').addClass('far');

            // sort list
            $(this).parent().closest('.card').removeClass('favoritelist')
            $('#menu-items .card:not(.favoritelist)').sort(function(a, b) {
                if (a.textContent.trim().slice(0, 25) < b.textContent.trim().slice(0, 25)) {
                    return -1;
                } else {
                    return 1;
                }
            }).appendTo('#menu-items');

        }




        return false
    })




    // search functionality of menu
    $("#menu-item-search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#menu-items .card .card-header").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // search functionality of fav
    $("#fav-item-search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#fav-items .card .card-header").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // search functionality of two
    $("#left-two-search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#leftTwo .card .card-header").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // search functionality of five
    $("#left-five-search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#leftFive .card .card-header").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // search Clear functionality
    $(".searchbar i").click(function() {
        $(".searchbar input").val('');
        $(".searchbar input").trigger("keyup");
    })


    // expand functionality
    $(".left-two .expand").click(function() {
        if ($(".menu").hasClass('expand')) {
            $(".menu").removeClass('expand')
            $(".expand").removeClass('active')
        } else {
            $(".menu").addClass('expand')
            $(".expand").addClass('active');
        }

        return false
    })

    // left five tabs
    $('.left-five a').click(function() {
        // Check for active
        $('.left-five li').removeClass('active');
        $(this).parent().addClass('active');

        // Display active tab
        let currentTab = $(this).attr('href');
        $('.middle-menu > div').hide();
        $(currentTab).show();

        return false;
    });


    // color change 
    $('.main-bg button').click(function() {
        $('.middle-menu').css('background-color', $("#main-bg-colourPicker").val());
    });

    $(document).on("click", '.tpm', function(event) {
        fetch(`https://${GetParentResourceName()}/tpm`, {
            method: 'POST'
        });
        return false
    });

    $(document).on("click", '.noclip', function(event) {
        fetch(`https://${GetParentResourceName()}/noclip`, {
            method: 'POST'
        });
        return false
    });

    $(document).on("click", '.reviveArea', function(event) {
        fetch(`https://${GetParentResourceName()}/reviveArea`, {
            method: 'POST'
        });
        return false
    });

    $(document).on("click", '.reviveAll', function(event) {
        fetch(`https://${GetParentResourceName()}/reviveAll`, {
            method: 'POST'
        });
        return false
    });

    $(document).on("click", '.spectate', function(event) {
        fetch(`https://${GetParentResourceName()}/spectate`, {
            method: 'POST'
        });
        return false
    });
});


// function to remove item from favorite filter
$(document).on("click", '#fav-items .fav-btn', function(event) {

    if ($(this).parent().closest('.card').hasClass('only-btn')) {
        // for only btn 
        $(this).parent().closest('.card').remove()
        // change star icon
        var onlyBtnID = $(this).attr('id')
        $('#menu-items').find("#" + onlyBtnID).children().removeClass('fas').addClass('far');

        // remove sort class
        $('#menu-items').find("#" + onlyBtnID).parent().closest('.card').removeClass('favoritelist')


    } else {
        // get id of clicked item
        var element = $(this).parent().closest('.card').find('.collapse').attr('id');

        // remove unique id from last of id (FAV)
        var elementId = element.substring(0, element.length - 3)

        // change star icon
        $('#menu-items #' + elementId).parent().closest('.card').find('.fav-btn i').removeClass('fas').addClass('far');

        // remove sort class
        $('#menu-items #' + elementId).parent().closest('.card').removeClass('favoritelist')

        // find parent of this class and remove parent
        $(this).parent().closest('.card').remove()
    }

    // sorting code
    $('#menu-items .card:not(.favoritelist)').sort(function(a, b) {
        if (a.textContent.trim().slice(0, 25) < b.textContent.trim().slice(0, 25)) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#menu-items');


    return false
});




// new functions
// ===============


// mutli select with search 
$('.multiple-select').multiselectdropdown({

    // highest number of option you can select
    limitCount: 4,
    limitCountErrorMessage: 'You can not select more than 4 items',

    // if you want selected option as box or as string
    multipleMode: 'label',

    // search option
    searchable: true,
    input: '<input type="text" maxLength="20" placeholder="Search">',
    searchNoData: '<li style="color:#333">No Results Found</li>',

});



// notification function
function showNoticeOne(title, text) {
    if (typeof window.customOptionForNotification === 'undefined') {
        window.customOptionForNotification = new PNotify.Stack({
            dir1: 'up',
            dir2: 'left',
            firstpos1: 25,
            firstpos2: 50,
            modal: false,
            maxOpen: 2,
            maxStrategy: 'wait',
            maxClosureCausesWait: false
        });
    }

    PNotify.notice({
        title: title,
        text: text,
        delay: 1000,
        icon: 'fa fa-info-circle',
        stack: window.customOptionForNotification,
    });
}

// button active

$('.togglable-btns').click(function() {
    $(this).toggleClass('active')
});