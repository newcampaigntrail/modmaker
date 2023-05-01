e=campaignTrail_temp
modmaker_data = {
    election: {},
    candidates: [],
    vps: [],
    misc: {},
    theme: {has_theme: false}
}
mm = modmaker_data

function removeIssueDuplicates(array) {
    const a = array.filter((item, index) => array.map(f=>f.issue).indexOf(item.issue) == index);
    return a
}

AdvisorFeedbackArr=[1,0]

function dHondtAllocation(votes, seats, thresh = 0.15) {
    let quotients = votes
    let allocations = []
    votes.forEach(function(){allocations.push(0)})
    let total_votes = votes.reduce((sum, value)=>sum+value)
    let perc_votes = []
    votes.forEach(f=>{perc_votes.push(f/total_votes)})

    for (let i = 0; i < seats; i++) {
        for (let w = 0; w < votes.length; w++) {
            if (perc_votes[w] < thresh) {
                quotients[w] = 0
            }
            quotients[w] = votes[w]/(allocations[w]+1)
        }
        index = quotients.indexOf(Math.max(...quotients))
        allocations[index] += 1
    }

    return allocations
}

var states = []
var initIt=0
window.setInterval(function(){campaignTrail_temp.candidate_json = campaignTrail_temp.candidate_json.filter(n => n)},200) // eye roll goes here -> modders are stupid
var fileExists = function(url) {
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();
    return req.status === 200;
};

lastUpdatedDate="2023-01-18"

function returnToMainPage() {
    try
    {
    document.getElementById("achBox").remove()
    }
    catch
    {

    }
   



    $("#below_header")[0].style.display=""
    addAchButton()
    addInfoButton()


// Add an event listener to the "Achievements" button
achButton = document.getElementById("achievMenuButton");
achButton.addEventListener("click", openAchievMenu);

// Add an event listener to the "Info" button
infoButton = document.getElementById("infoMenuButton");
infoButton.addEventListener("click", openInfoMenu);

}

function simpleAdventure(ans) {
    return 1203;
}

function histFunction() {
    if (modded == false) {
        switch (campaignTrail_temp.election_id) {
            case 21:
                HistHexcolour = ["#0000FF", "#FF0000", "#FFFF00", "#00C100"];
                HistName = ["Joe Biden", "Donald Trump", "Jo Jorgensen", "Howie Hawkins"];
                HistEV = [306, 232, 0, 0];
                HistPV = ["81,268,924", "74,216,154", "1,865,724", "405,035"];
                HistPVP = ["51.3%", "46.9%", "1.2%", "0.4%"];
                break;

            case 20:
                HistHexcolour = ["#FF0000", "#0000FF", "#FFFF00", "00C100"];
                HistName = ["Donald Trump", "Hillary Clinton", "Gary Johnson", "Jill Stein"];
                HistEV = [306, 232, 0, 0];
                HistPV = ["62,984,828", "65,853,514", "4,489,341", "405,035"];
                HistPVP = ["46.1%", "48.2%", "3.3%", "1.1%"];
                break;
            case 16:
                HistHexcolour = ["#FF0000", "#0000FF", "#FFFF00", "#00C100"];
                HistName = ["Donald Trump", "Hillary Clinton", "Gary Johnson", "Jill Stein"];
                HistEV = [306, 232, 0, 0];
                HistPV = ["62,984,828", "65,853,514", "4,489,341", "405,035"];
                HistPVP = ["46.1%", "48.2%", "3.3%", "1.1%"];
                break;

            case 3:
                HistHexcolour = ["#0000FF", "#FF0000", "#FFFF00", "#00C100"];
                HistName = ["Barack Obama", "Mitt Romney", "Gary Johnson", "Jill Stein"];
                HistEV = [332, 206, 0, 0];
                HistPV = ["65,915,795", "60,933,504", "1,275,971", "469,627"];
                HistPVP = ["51.1%", "47.2%", "1.0%", "0.4%"];
                break;

            case 9:
                HistHexcolour = ["#FF0000", "#0000FF", "#00C100", "#800080"];
                HistName = ["George W. Bush", "Al Gore", "Ralph Nader", "Pat Buchanan"];
                HistEV = [271, 267, 0, 0];
                HistPV = ["50,456,002", "50,999,897", "2,882,955", "448,895"];
                HistPVP = ["47.9%", "48.4%", "2.7%", "0.4%"];
                break;

            case 15:
                HistHexcolour = ["#FF0000", "#0000FF", "#FFFF00", "#00C100"];
                HistName = ["George Bush", "Michael Dukakis", "Ron Paul", "Lenora Fulani"];
                HistEV = [426, 112, 0, 0];
                HistPV = ["48,886,597", "41,809,476", "431,750", "217,221"];
                HistPVP = ["53.4%", "45.7%", "0.5%", "0.2%"];
                break;
            case 10:
                HistHexcolour = ["#0000FF", "#FF0000", "#FFFFFF", "#FFFF00"];
                HistName = ["Jimmy Carter", "Gerald Ford", "Eugene McCarthy", "Roger MacBride"];
                HistEV = [297, 241, 0, 0];
                HistPV = ["40,831,881", "39,148,634", "744,763", "172,557"];
                HistPVP = ["50.1", "48.0", "0.9%", "0.2%"];
                break;
            case 4:
                HistHexcolour = ["#FF0000", "#0000FF", "#FFFF00", "#FFFFFF"];
                HistName = ["Richard Nixon", "Hubert Humphrey", "George Wallace", "Other"];
                HistEV = [302, 191, 45, 0];
                HistPV = ["31,783,783", "31,271,839", "9,901,118", "243,259"];
                HistPVP = ["43.4%", "42.7%", "13.5%", "0.3%"];
                break;

            case 69:
                HistHexcolour = ["#0000FF", "#FF0000", "#FFFF00", "#DB261D"];
                HistName = ["Lyndon B. Johnson", "Barry Goldwater", "Unpledged electors", "Eric Hass"];
                HistEV = [486, 52, 0, 0];
                HistPV = ["43,129,040", "27,175,754", "210,732", "45,189"];
                HistPVP = ["61.1%", "38.5%", "0.3%", ">0.1%"];
                break;

            case 11:
                HistHexcolour = ["#0000FF", "#FF0000", "#FFFF00", "#FFFFFF"];
                HistName = ["John Kennedy", "Richard Nixon", "Harry Byrd", "Unpledged elector"];
                HistEV = [303, 219, 15, 0];
                HistPV = ["34,220,984", "34,108,157", "Unknown", "286,359"];
                HistPVP = ["49.7%", "49.5%", "Unknown", "0.4%"];
                break;
            case 12:
                HistHexcolour = ["#0000FF", "#FF0000", "#FFFF00", "#00C100"];
                HistName = ["Harry Truman", "Thomas Dewey", "Strom Thurmond", "Henry Wallace"];
                HistEV = [303, 189, 39, 0];
                HistPV = ["24,179,347", "21,991,292", "1,175,930", "1,157,328"];
                HistPVP = ["49.6%", "45.1%", "2.4%", "2.4%"];
                break;
            case 14:
                HistHexcolour = ["#0000FF", "#FF0000", "#DB261D", "FFC0CB"];
                HistName = ["Woodrow Wilson", "Charles Evans Hughes", "Allan Benson", "James Hanly"];
                HistEV = [277, 254, 0, 0];
                HistPV = ["9,126,868", "8,548,728", "590,524", "221,302"];
                HistPVP = ["49.2%", "46.1%", "3.2%", "1.2%"];
                break;			
            case 5:
                return 1896
                HistHexcolour = ["#FF0000", "#0000FF", "#FFFF00", "FFC0CB"];
                HistName = ["William McKinley", "William Jennings Bryan", "John Palmer", "Joshua Levering"];
                HistEV = [271, 176, 0, 0];
                HistPV = ["7,111,607", "6,509,052", "134,645", "131,312"];
                HistPVP = ["51.0%", "46.7%", "1.0%", "0.9%"];
                break;			
            case 8:
                HistHexcolour = ["#FF0000", "#FFFF00", "#00C100;", "#0000FF"];
                HistName = ["Abraham Lincoln", "John C. Breckinridge", "John Bell", "Stephen Douglas"];
                HistEV = [180, 72, 39, 12];
                HistPV = ["1,865,908", "848,019", "590,901", "1,380,202"];
                HistPVP = ["39.8%", "18.1%", "12.6%", "29.5%"];
                break;
            case 13:
                HistHexcolour = ["#0000FF", "#F0C862", "#FFFF00;", "#FFFFFF"];
                HistName = ["James K. Polk", "Henry Clay", "James Birney", "N/A"];
                HistEV = [170, 105, 0, 0];
                HistPV = ["1,339,494", "1,300,004", "62,103", "N/A"];
                HistPVP = ["49.5%", "48.1%", "2.3%", "N/A"];
                break;
        }
    }
}
let HistHexcolour = ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
let HistName = ["N/A", "N/A", "N/A", "N/A"];
let HistEV = [0, 0, 0, 0];
let HistPV = [0, 0, 0, 0];
let HistPVP = [0, 0, 0, 0];

function cyoAdventure(question) {
    latestAnswer = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length - 1]
    for (i = 0; i < campaignTrail_temp.questions_json.length; i++) {
        if (campaignTrail_temp.questions_json[i].pk == question.pk) {
            for (v = 0; v < campaignTrail_temp.questions_json.length; v++) {
                if (campaignTrail_temp.questions_json[v].pk == simpleAdventure(latestAnswer)) {
                    campaignTrail_temp.questions_json[campaignTrail_temp.question_number] = campaignTrail_temp.questions_json[v]
                    break
                }

            }
            break
        }
    }
}

campaignTrail_temp.margin_format = window.localStorage.getItem("margin_form") ?? "#FFFFFF"

function encode(str) {


    const revArray = [];
    const length = str.length - 1;

    for (let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }

    return revArray.join('');
}

function gradient(interval, min, max) {
    return interval < min ? min : interval > max ? max : interval;
}

function csrfToken() {

    return function(e) {
        var t = null;
        if (document.cookie && "" != document.cookie)
            for (var i = document.cookie.split(";"), a = 0; a < i.length; a++) {
                var s = jQuery.trim(i[a]);
                if (s.substring(0, e.length + 1) == e + "=") {
                    t = decodeURIComponent(s.substring(e.length + 1));
                    break
                }
            }
        return t
    }("csrftoken")
}

slrr = ""
rrr = ""
starting_mult = 0
encrypted = Math.round(Math.random() * 100)
t = ""
nnn = ""

function switchPV() {
    // switchingEst, rrr, _, pvswitcher
    swE = document.getElementById("switchingEst")
    if (swE.innerHTML == rrr) {
        swE.innerHTML = slrr
        pvswitcher.innerText = "PV Estimate"
    } else {
        swE.innerHTML = rrr
        pvswitcher.innerText = "Switch to State Estimate"
    }
    document.getElementById("ev_est").style.display = ""
}

function evest() {
    document.getElementById("ev_est").style.display = "none"
    swE = document.getElementById("switchingEst")
    swE.innerHTML = nnn
}

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

function copy(mainObject) {
    let objectCopy = {}; // objectCopy will store a copy of the mainObject
    let key;
    for (key in mainObject) {
        objectCopy[key] = mainObject[key]; // copies each property to the objectCopy object
    }
    return objectCopy;
}

modded = false
i = 1
moddercheckeror = false
code222 = []
kill = false
important_info = ""

function sussyroth() {
    return campaignTrail_temp.iamapoopybuttfaceandhavenolife
}

/*
function loadMod(code1, code2) {
    kill = false
    if (moddercheckeror == false) {
        eval(code1)
        moddercheckeror = true
        var important_code = setInterval(function() {
            if ($("#answer_select_button")[0] != null && kill == false) {
                eval(code2)
                if (kill == false)
                    kill = true
            }
            i += 1
        }, 1000);
    }
}
*/


function endingPicker(out, totv, aa, quickstats) {
    //out = "win", "loss", or "tie" for your candidate
    //totv = total votes in entire election
    //aa = all final overall results data
    //quickstat = relevant data on candidate performance (format: your candidate's electoral vote count, your candidate's popular vote share, your candidate's raw vote total)

    if (important_info.indexOf("404") > -1) {
        important_info = "return false"
    }

    if (important_info != "") {
        a = new Function("out", "totv", "aa", "quickstats", important_info)(out, totv, aa, quickstats)
        return a
    } else {
        return "<font id='monologue' face='Comic Sans MS'>* heya<br>* is anyone there?<br>* well... just calling to ask.<br>* you really like to challenge yourself, huh...?<br>*well... good job.<br>* just promise not to brag about it, okay?<br>* ... guess i should say something else, too.<br><button onclick='nextPage()'>Next Page</button></font>"
    }
}

function modSelectChange() {
    if ($("#modSelect")[0].value == "other") {
        $("#customMenu")[0].style.display = "block"
    } else {
        $("#customMenu")[0].style.display = "none"
    }
}

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {
        type: contentType
    });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function exportResults() {
    if (campaignTrail_temp.iamapoopybuttfaceandhavenolife != true && dirtyhacker3 == null) {
        results = {
            election_id: campaignTrail_temp.election_id,
            player_candidate: campaignTrail_temp.candidate_id,
            player_answers: campaignTrail_temp.player_answers,
            player_visits: campaignTrail_temp.player_visits,
            overall_results: campaignTrail_temp.final_overall_results,
            state_results: campaignTrail_temp.final_state_results,
            difficulty_multiplier: campaignTrail_temp.difficulty_level_multiplier,
            starting_mult: starting_mult
        }
    } else {
        results = {
            election_id: campaignTrail_temp.election_id,
            player_candidate: campaignTrail_temp.candidate_id,
            player_answers: campaignTrail_temp.player_answers,
            player_visits: campaignTrail_temp.player_visits,
            overall_results: campaignTrail_temp.final_overall_results,
            state_results: campaignTrail_temp.final_state_results,
            difficulty_multiplier: 696969,
            starting_mult: starting_mult
        }
    }

    coded = encode(btoa(JSON.stringify(results)))
        //coded=JSON.stringify(results)
    download(coded, "results.json", 'text/plain')
}

diff_mod = false

$("#submitMod").click(function() {
    if ($("#importfile")[0].value != "") {
        const content = document.querySelector('.content');
        const [file] = document.querySelector('input[type=file]').files;
        const reader = new FileReader();

        reader.onload = function(fle) {
            importedtext = fle.target.result
            importedtext = encode(importedtext)
            importedtext = atob(importedtext)
            campaignTrail_temp.dagakotowaru = importedtext
        }
        reader.readAsText(file);
    }
    if ($("#modSelect")[0].value == "other") {
        important_info = $("#codeset3")[0].value;
        if (important_info != "") {
            campaignTrail_temp.multiple_endings = true
        }
        if (!moddercheckeror) {
            eval($("#codeset1")[0].value)
            moddercheckeror = true
        }
    } else {
        var client = new XMLHttpRequest();
        client.open('GET', "../static/mods/" + $("#modSelect")[0].value + "_init.html");
        client.onreadystatechange = function() {
            eval(client.responseText)
        }
        client.send();
        diff_mod = true
    }
    $("#modloaddiv")[0].style.display = 'none'
    $("#modLoadReveal")[0].style.display = 'none'
    modded = true
})

function divideElectoralVotesProp(e, t) {
    for (var i = [], a = 0, s = 0; s < e.length; s++) {
        var n = Math.floor(e[s] * t);
        i.push(n), a += n
    }
    return i[0] += t - a, i
}! function() {
    var e = campaignTrail_temp;

    function electionNight() {
        ! function() {
            for (var t = u(), i = "", a = 0; a < t.length; a++) i += '            <li><span style="color:' + t[a].color + "; background-color: " + t[a].color + '">--</span> ' + t[a].last_name + ":  0</li>";
            var s = S(e.election_id),
                n = e.election_json[s].fields.winning_electoral_vote_number;
            $("#game_window").html('        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ELECTORAL VOTES</h3>                        <ul>' + i + "</ul>                        <p>0% complete</br>" + n + ' to win</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_result">                        <h3>STATE RESULTS</h3>                        <p>Click on a state to view detailed results (once returns for that state arrive).</p>                    </div>                </div>            </div>        </div>        <div id="map_footer">        <button id="final_result_button">Go to Final Results</button>        </div>        <div class="overlay" id="election_night_overlay"></div>        <div class="overlay_window" id="election_night_window">            <div class="overlay_window_content" id="election_night_content">            <h3>Advisor Feedback</h3>            <img src="' + e.election_json[s].fields.advisor_url + '" width="208" height="128"/>            <p>Election night has arrived. Settle in and wait for the returns, however                 long it may take. Best of luck!</p>            </div>            <div class="overlay_buttons" id="election_night_buttons">            <button id="ok_button">OK</button><br>            </div>        </div>');
            var lTemp = function() {
                for (var t = {}, i = 0; i < e.states_json.length; i++) t[e.states_json[i].fields.abbr] = {
                    fill: "#C9C9C9"
                };
                return {
                    stateStyles: {
                        fill: "#EAFDFF"
                    },
                    stateHoverStyles: {
                        fill: "#EAFDFF"
                    },
                    stateSpecificStyles: t,
                    stateSpecificHoverStyles: t
                }
            }();
            $("#map_container").usmap(lTemp), $("#ok_button").click(function() {
                $("#election_night_overlay").remove(), $("#election_night_window").remove()
            }), $("#final_result_button").click(function() {
                clearTimeout(results_timeout), $("#map_footer").html("<i>Processing Results, wait one moment...</i>");
                //HELPFUL CODE HERE
                //campaignTrail_temp.question_number = 0
                //ee = A(return_type=2)
                //o(ee)
                v(500);
                m()
            })
        }();
        e.final_overall_results = [];
        for (var t = 0; t < e.final_state_results[0].result.length; t++) e.final_overall_results.push({
            candidate: e.final_state_results[0].result[t].candidate,
            electoral_votes: 0,
            popular_votes: 0
        });
        ! function() {
            for (var t = 0; t < e.final_state_results.length; t++) {
                var i = R(e.final_state_results[t].state),
                    a = c(e.final_state_results[t].result, e.states_json[i].fields.poll_closing_time);
                e.final_state_results[t].result_time = a
            }
        }(), $("#ok_button").click(function() {
            results_timeout = setTimeout(function() {
                ! function t(i, a) {
                    var s = [0, 0];
                    for (var n = 0; n < e.final_overall_results.length; n++) e.final_overall_results[n].electoral_votes > s[0] && (s[0] = e.final_overall_results[n].electoral_votes);
                    total_votes = 0
                    for (iterator = 0; iterator < e.final_overall_results.length; iterator++) {
                        total_votes += e.final_overall_results[iterator].popular_votes
                    }
                    pop_vs = []
                    for (iterator = 0; iterator < e.final_overall_results.length; iterator++) {
                        if (e.final_overall_results[iterator].popular_votes / total_votes > 0)
                            pop_vs.push(e.final_overall_results[iterator].popular_votes / total_votes)
                        else {
                            pop_vs.push(0)
                        }
                    }
                    var a = v(i);
                    var l = S(e.election_id);
                    var o = e.election_json[l].fields.winning_electoral_vote_number;
                    var _ = u();
                    var r = "";
                    for (var n = 0; n < _.length; n++) {
                        for (let d = 0; d < e.final_overall_results.length; d++)
                            if (e.final_overall_results[d].candidate == _[n].candidate) {
                                var c = e.final_overall_results[d].electoral_votes;
                                var popvthing = (pop_vs[d] * 100).toFixed(1)
                            }
                        r += '            <span style="color:' + _[n].color + "; background-color: " + _[n].color + '">--</span> <b>' + _[n].last_name + "</b> -  " + c + " / " + popvthing + "%<br>"
                    }
                    var p = f(i);
                    var h = Math.floor(i / 480 * 100);
                    var g = $("#state_result_container").html();
                    $("#game_window").html("");
                    $("#game_window").html('        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ELECTION TALLY</h3>                        <ul>' + r + "</ul>                        <p>" + h + "% complete</br>" + o + ' to win</p>                    </div>                </div>                <div id="state_result_container">' + g + '</div>            </div>        </div>        <div id="map_footer">        <button id="final_result_button">Go to Final Results</button>        </div>');
                    $("#map_container").usmap(p);
                    $("#final_result_button").click(function() {
                        clearTimeout(results_timeout), $("#map_footer").html("<i>Processing Results, wait one moment...</i>");
                        v(500);
                        m()
                    });
                    for (var n = 0; n < e.final_overall_results.length; n++) e.final_overall_results[n].electoral_votes > s[1] && (s[1] = e.final_overall_results[n].electoral_votes);
                    if (s[0] < o && s[1] >= o) {
                        if (e.final_overall_results[0].candidate == e.candidate_id) var b = "Congratulations! You won this year's election! Click OK to view the                     rest of the returns, or skip straight to the final results. We hope                     you have a nice victory speech prepared for your supporters.";
                        else if (e.final_overall_results[0].candidate != e.candidate_id) var b = "Sorry. You have lost the election this time. Click OK to view the                     rest of the returns, or skip straight to the final results. We hope                     you have a nice concession speech prepared.";
                        $("#game_window").append('            <div class="overlay" id="election_night_overlay"></div>            <div class="overlay_window" id="election_night_window">                <div class="overlay_window_content" id="election_night_content">                <h3>Advisor Feedback</h3>                <img src="' + e.election_json[l].fields.advisor_url + '" width="208" height="128"/><p>' + b + '</p></div>                <div class="overlay_buttons" id="winner_buttons">                <button id="ok_button">OK</button><br>                <button id="overlay_result_button">Go to Final Results</button>                </div>            </div>'), $("#ok_button").click(function() {
                            $("#election_night_overlay").remove(), $("#election_night_window").remove(), results_timeout = setTimeout(function() {
                                t(i, a)
                            }, 2e3)
                        }), $("#overlay_result_button").click(function() {
                            $("#election_night_overlay").remove(), $("#election_night_window").remove(), clearTimeout(results_timeout), $("#map_footer").html("<i>Processing Results, wait one moment...</i>");
                            v(500);
                            m()
                        })
                    } else i >= 480 || a >= e.states_json.length ? (h = 100, $("#overall_result").html("            <h3>ELECTION TALLY</h3>            <ul>" + r + "</ul>            <p>" + h + "% complete</br>" + o + " to win</p>")) : results_timeout = setTimeout(function() {
                        t(i, a)
                    }, 2e3);
                    i += 10
                }(0, 0)
            }, 2e3)
        })
    }


    function t() {
        for (var t = -1, i = 0; i < e.candidate_json.length; i++)
            if (e.candidate_json[i].pk == candidate_id.value) {
                t = i;
                break
            }
        $("#candidate_description_window").html('<div class="person_image" id="candidate_image">            <img src="' + e.candidate_json[t].fields.image_url + '" width="210" height="250"/>        </div>        <div class="person_summary" id="candidate_summary">        <ul><li>Name: ' + e.candidate_json[t].fields.first_name + " " + e.candidate_json[t].fields.last_name + "</li>        <li>Party: " + e.candidate_json[t].fields.party + "</li>        <li>Home State: " + e.candidate_json[t].fields.state + "</li>        </ul>" + e.candidate_json[t].fields.description + "</div>")
    }

    function running_mate_gen() {
        for (var run = -1, i = 0; i < e.candidate_json.length; i++)
            if (e.candidate_json[i].pk == running_mate_id.value) {
                run = i;
                break
            }
        let t = run;
        $("#running_mate_description_window").html('<div class="person_image" id="running_mate_image">            <img src="' + e.candidate_json[t].fields.image_url + '" width="210" height="250"/>        </div>        <div class="person_summary" id="running_mate_summary">        <ul><li>Name: ' + e.candidate_json[t].fields.first_name + " " + e.candidate_json[t].fields.last_name + "</li>        <li>Party: " + e.candidate_json[t].fields.party + "</li>        <li>Home State: " + e.candidate_json[t].fields.state + "</li>        </ul>" + e.candidate_json[t].fields.description_as_running_mate + "</div>")
    }

    function a(e) {
        var t;
        switch (e) {
        case "1":
            t = "<p><strong>Use the default method of allocating electoral votes for each state.</strong></p>                 <p>In the vast majority of cases, states use a winner-take-all method. For instance,                 if Candiate A defeats Candidate B in a state, worth 20 electoral votes, Candidate                 A will usually win all 20 votes.</p>                 <p>This method tends to concentrate the election into a handful of swing states.                 It also makes it difficult for third-party candidates to win electoral votes. On                 the other hand, it is easier for a single candidate to gain an overall majority of the                 electoral votes.</p>";
            break;
        case "2":
            t = "<p><strong>Allocate each state's electoral votes proportionally.</strong></p>                <p>Under this method, all candidates split the electoral votes in a state, in                 proportion to their popular vote %.</p>                <p>There is still an advantage to winning a state -- the winner of the state will                 always receive a plurality of electoral votes. For instance, in a state with                 4 electoral votes, if Candidate A wins 51% of the vote, they will be awarded 3                 electoral votes.</p>                <p>Compared to a winner-take-all method, this method aligns the electoral vote                 more closely with the popular vote. It also makes it easier to third party                 candidates to increase their electoral vote totals. In some scenarios, this effect                 is highly significant on the final outcome. Some examples are 1860, 1948, 1968, and 2000. </p>";
            break;
        }
        $("#opponent_selection_description_window").html(t);

    }

    function findFromPK(array, pk) {
        a = array.map(zzzz => zzzz.pk).indexOf(Number(pk))
        return a;
    }

    ree = {}
    window.setTimeout(function() {
        ree = copy(campaignTrail_temp)
    }, 600)

    function realityCheck(cand, running_mate, ree) { //checks if we are actually looking at a real candidate pairing
        pairs = e.running_mate_json.map(f => f.fields).map(f => [f.candidate,f.running_mate])
        pair = [cand, running_mate]
        for (let i in pairs) {
            if(JSON.stringify(pairs[i]) == JSON.stringify(pair)) return true
        }
        return false
    }

    function election_HTML(id, cand, running_mate) {
        if (id != 16) {
            if (modded) {
                try {
                yearbit = ree.election_json[findFromPK(ree.election_json, id)].fields.year
                lastnamebit = ree.candidate_json[findFromPK(ree.candidate_json, campaignTrail_temp.candidate_id)].fields.last_name
                veeplastname = ree.candidate_json[findFromPK(ree.candidate_json, campaignTrail_temp.running_mate_id)].fields.last_name
                } catch {}
                real = realityCheck(cand, running_mate, ree)

                if (real) {
                    return yearbit + "_" + lastnamebit + "_" + veeplastname + ".html"
                }
                // corrects pairing if haven't returned yet

                // corrects cand
                realCandidates = ree.candidate_json.filter(f=>f.fields.is_active>0).map(f=>f.pk)
                currCandData = copy(e.candidate_json[e.candidate_json.map(f=>f.pk).indexOf(Number(cand))]) // gets current candidate json data

                if (!realCandidates.includes(Number(cand))) {
                    alert("Unfortunately, this part of the mod is currently broken, and is unplayable. Apologies.")
                    window.location.reload()
                } else {
                    fakeId = cand
                }

                // ensures correct running mate

                correctPair = ree.running_mate_json[ree.running_mate_json.map(f=>f.fields.candidate).indexOf(Number(fakeId))]
                correctRunningMate = correctPair.fields.running_mate
                correctIndex = ree.candidate_json.map(f=>f.pk).indexOf(correctRunningMate)
                oldRM = e.candidate_json[e.candidate_json.map(f=>f.pk).indexOf(Number(running_mate))]
                veeplastname = ree.candidate_json[correctIndex].fields.last_name
                e.candidate_json[correctIndex] = oldRM //sets to new RM (lmao this is such a fucking stupid solution)
                
                return yearbit + "_" + lastnamebit + "_" + veeplastname + ".html"
            } else {
                return campaignTrail_temp.election_json[findFromPK(campaignTrail_temp.election_json, id)].fields.year + "_" + campaignTrail_temp.candidate_json[findFromPK(campaignTrail_temp.candidate_json, cand)].fields.last_name + "_" + campaignTrail_temp.candidate_json[findFromPK(campaignTrail_temp.candidate_json, running_mate)].fields.last_name + ".html"
            }
        } else if (id == 16) {
            return "2016a_" + campaignTrail_temp.candidate_json[findFromPK(campaignTrail_temp.candidate_json, cand)].fields.last_name + "_" + campaignTrail_temp.candidate_json[findFromPK(campaignTrail_temp.candidate_json, running_mate)].fields.last_name + ".html"
        }
    }

    function s(t, i, l) {
        for (var o = "", r = 0; r < e.difficulty_level_json.length; r++) "Normal" == e.difficulty_level_json[r].fields.name ? o += "<option value=" + e.difficulty_level_json[r].pk + " selected>" + e.difficulty_level_json[r].fields.name + "</option>" : o += "<option value=" + e.difficulty_level_json[r].pk + ">" + e.difficulty_level_json[r].fields.name + "</option>";
        let d = '        <div class="game_header">        <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div class="inner_window_w_desc" id="inner_window_4">            <div id="game_options">            <form name="game_type_selection">            <p><h3>How would you like the electoral votes to be allocated?</h3>            <select name="game_type_id" id="game_type_id">                <option value=1>Default (Winner-Take-All)</option>                <option value=2>Proportional</option>            </select>            </p>            </form>            </div>            <div class="description_window_small"                 id="opponent_selection_description_window">            </div>            <div id="difficulty_level">            <form name="difficulty_level_selection">            <p><h3>Please choose your difficulty level:</h3>            <select name="difficulty_level_id" id="difficulty_level_id">' + o + '</select>            </p>            </form>            </div>        <p id="opponent_selection_id_button_p"><button class="person_button" id="opponent_selection_id_back">Back</button> <button class="person_button" id="opponent_selection_id_button">Continue</button>        </p>        </div>';
        $("#game_window").html(d), $("#game_type_id").ready(function() {
            a($("select[name=game_type_id]").val())

        }), $("#game_type_id").change(function() {
            a($("select[name=game_type_id]").val())
        })
        $("#opponent_selection_id_back").click(vpSelect)
        $("#opponent_selection_id_button").click(function() {
            $("#opponent_selection_id_button").replaceWith("<em>One moment...</em>");
            for (var a = [], o = [], r = 0; r < e.candidate_dropout_json.length; r++) e.candidate_dropout_json[r].fields.candidate == i && a.push(e.candidate_dropout_json[r].fields.affected_candidate);
            let d = -1;
            for (r = 0; r < e.opponents_default_json.length; r++)
                if (e.opponents_default_json[r].election == t) {
                    d = r;
                    break
                }
            for (r = 0; r < e.opponents_default_json[d].candidates.length; r++) {
                e.opponents_default_json[d].candidates[r] != i && -1 == a.indexOf(e.opponents_default_json[d].candidates[r]) && o.push(e.opponents_default_json[d].candidates[r]);
            }
            e.election_id = t, e.candidate_id = i, e.running_mate_id = l, e.opponents_list = o, e.game_type_id = $("select[name=game_type_id]").val(), e.difficulty_level_id = $("select[name=difficulty_level_id]").val();
            var c = $("select[name=difficulty_level_id]").val();
            for ($("select[name=game_type_id]").val(), d = -1, r = 0; r < e.difficulty_level_json.length; r++)
                if (e.difficulty_level_json[r].pk == $("select[name=difficulty_level_id]").val()) {
                    d = r;
                    break
                }
            e.difficulty_level_multiplier = e.difficulty_level_json[d].fields.multiplier, starting_mult = encrypted + e.difficulty_level_json[d].fields.multiplier,
                function(t, i, a, l, o) {
                    if (campaignTrail_temp.musicOn) {
                        document.getElementById("music_player").style.display = ""
                        document.getElementById('campaigntrailmusic').src = campaignTrail_temp.musicSrc
                    }
                    if (campaignTrail_temp.iamapoopybuttfaceandhavenolife) {
                        document.getElementById('cheatmode').style.display = ""
                    }
                    if (modded == false) {
                        aaa = election_HTML(t, i, a)
                        aaa = "../static/questionset/" + aaa
                        $("#game_window").load(aaa)
                        e.question_number = 0, e.questions_json = campaignTrail_temp.questions_json, e.answers_json = campaignTrail_temp.answers_json, e.states_json = campaignTrail_temp.states_json, e.issues_json = campaignTrail_temp.issues_json, e.state_issue_score_json = campaignTrail_temp.state_issue_score_json, e.candidate_issue_score_json = campaignTrail_temp.candidate_issue_score_json, e.running_mate_issue_score_json = campaignTrail_temp.running_mate_issue_score_json, e.candidate_state_multiplier_json = campaignTrail_temp.candidate_state_multiplier_json, e.answer_score_global_json = campaignTrail_temp.answer_score_global_json, e.answer_score_issue_json = campaignTrail_temp.answer_score_issue_json, e.answer_score_state_json = campaignTrail_temp.answer_score_state_json, e.answer_feedback_json = campaignTrail_temp.answer_feedback_json, e.candidate_image_url = campaignTrail_temp.candidate_image_url, e.running_mate_image_url = campaignTrail_temp.running_mate_image_url, e.candidate_last_name = campaignTrail_temp.candidate_last_name, e.running_mate_last_name = campaignTrail_temp.running_mate_last_name, e.running_mate_state_id = campaignTrail_temp.running_mate_state_id, e.player_answers = campaignTrail_temp.player_answers, e.player_visits = campaignTrail_temp.player_visits, e.answer_feedback_flg = campaignTrail_temp.answer_feedback_flg, e.election_id = Number(e.election_id), e.candidate_id = Number(e.candidate_id), e.running_mate_id = Number(e.running_mate_id), e.difficulty_level_id = Number(e.difficulty_level_id), e.game_start_logging_id = Number(campaignTrail_temp.game_start_logging_id)
                        var important_code = setInterval(function() {
                            $("#view_electoral_map").click(function() {
                                var e = A(return_type = 2);
                                _(e);
                            })
                            $("#answer_select_button").click(function() {
                                var t = $("input:radio[name=game_answers]:checked").val();
                                null == t ? C(e.election_id) : n(t)
                            })
                            if ($("#answer_select_button")[0] != null) {
                                clearInterval(important_code)
                            }
                        }, 1000);
                    } else if ($("#modSelect")[0].value != "other") {
                        aaa = election_HTML(t, i, a)
                        aaa = "../static/questionset/" + aaa
                        try {
                            $("#game_window").load(aaa, function() {
                                e = campaignTrail_temp
                                eArr = e.temp_election_list.map(a=>a.id).indexOf(e.election_id)
                                year = e.temp_election_list[eArr].display_year
                                cand = e.candidate_json[e.candidate_json.map(a=>a.pk).indexOf(e.candidate_id)].fields.last_name
                                run = e.candidate_json[e.candidate_json.map(a=>a.pk).indexOf(e.running_mate_id)].fields.last_name
                                theorId = year+"_"+cand+run
                                //theorId = $("#modSelect")[0].value

                                var client = new XMLHttpRequest();
                                client.open('GET', "../static/mods/" + theorId + ".html");
                                client.onreadystatechange = function() {
                                    eval(client.responseText)
                                    tempFuncO=function(e,i=campaignTrail_temp){for(var s=[],a=0;a<i.answers_json.length&&(i.answers_json[a].fields.question!=i.questions_json[i.question_number].pk||(s.push({key:a,order:Math.random()}),4!=s.length));a++);P(s,"order");for(var t="",a=0;a<s.length;a++)t+='<input type="radio" name="game_answers" class="game_answers"             id="game_answers['+a.toString()+']" value="'+i.answers_json[s[a].key].pk+'"/>\t\t    <label for="game_answers['+a.toString()+']">'+i.answers_json[s[a].key].fields.description+"</label><br>";var r='<div class="game_header">    <h2>NEW CAMPAIGN TRAIL</h2>    </div>    <div class="inner_window_question">        <div class="inner_inner_window">        <h3>'+i.questions_json[i.question_number].fields.description+'</h3>            <div id="question_form">                <form name="question">'+t+'</form>            </div>        </div>        <p><button id="answer_select_button" class="answer_select_button">CONTINUE</button>        <button id="view_electoral_map">Latest Polls/Electoral Map</button></p>    </div>    <img id="candidate_pic" src="'+i.candidate_image_url+'">    <img id="running_mate_pic" src="'+i.running_mate_image_url+'">    <div class="inner_window_sign_display">        <div id="progress_bar">\t    <h3>Question '+(i.question_number+1)+" of "+i.global_parameter_json[0].fields.question_count+'</h3>        </div>        <div id="campaign_sign">        <p>'+i.candidate_last_name+"</p>        <p>"+i.running_mate_last_name+"</p>        </div>    </div>";$("#game_window").html(r)};
                                    
                                    tempFuncO(e)
                                }
                                client.send();
                                endingUrl = "../static/mods/" + theorId + "_ending.html"

                                try {
                                    if (fileExists(endingUrl))
                                    var client2 = new XMLHttpRequest();
                                    client2.open('GET', endingUrl);
                                    client2.onreadystatechange = function() {
                                        important_info = client2.responseText
                                    }
                                    client2.send();
                                } catch {
                                }
                            })

                        } catch {
                            
                        }
                        e.question_number = 0, e.questions_json = campaignTrail_temp.questions_json, e.answers_json = campaignTrail_temp.answers_json, e.states_json = campaignTrail_temp.states_json, e.issues_json = campaignTrail_temp.issues_json, e.state_issue_score_json = campaignTrail_temp.state_issue_score_json, e.candidate_issue_score_json = campaignTrail_temp.candidate_issue_score_json, e.running_mate_issue_score_json = campaignTrail_temp.running_mate_issue_score_json, e.candidate_state_multiplier_json = campaignTrail_temp.candidate_state_multiplier_json, e.answer_score_global_json = campaignTrail_temp.answer_score_global_json, e.answer_score_issue_json = campaignTrail_temp.answer_score_issue_json, e.answer_score_state_json = campaignTrail_temp.answer_score_state_json, e.answer_feedback_json = campaignTrail_temp.answer_feedback_json, e.candidate_image_url = campaignTrail_temp.candidate_image_url, e.running_mate_image_url = campaignTrail_temp.running_mate_image_url, e.candidate_last_name = campaignTrail_temp.candidate_last_name, e.running_mate_last_name = campaignTrail_temp.running_mate_last_name, e.running_mate_state_id = campaignTrail_temp.running_mate_state_id, e.player_answers = campaignTrail_temp.player_answers, e.player_visits = campaignTrail_temp.player_visits, e.answer_feedback_flg = campaignTrail_temp.answer_feedback_flg, e.election_id = Number(e.election_id), e.candidate_id = Number(e.candidate_id), e.running_mate_id = Number(e.running_mate_id), e.difficulty_level_id = Number(e.difficulty_level_id), e.game_start_logging_id = Number(campaignTrail_temp.game_start_logging_id)
                        var important_code = setInterval(function() {
                            $("#view_electoral_map").click(function() {
                                var e = A(return_type = 2);
                                _(e);
                            })
                            $("#answer_select_button").click(function() {
                                var t = $("input:radio[name=game_answers]:checked").val();
                                null == t ? C(e.election_id) : n(t)
                            })
                            if (diff_mod) {
                                
                            }
                            if ($("#answer_select_button")[0] != null) {
                                clearInterval(important_code)
                            }
                        }, 1000);
                    } else {
                        // other block case
                        aaa = election_HTML(t, i, a)
                        aaa = "../static/questionset/" + aaa
                        $("#game_window").load(aaa, function() {
                            eval($("#codeset2")[0].value)
                            tempFuncO=function(e,i=campaignTrail_temp){for(var s=[],a=0;a<i.answers_json.length&&(i.answers_json[a].fields.question!=i.questions_json[i.question_number].pk||(s.push({key:a,order:Math.random()}),4!=s.length));a++);P(s,"order");for(var t="",a=0;a<s.length;a++)t+='<input type="radio" name="game_answers" class="game_answers"             id="game_answers['+a.toString()+']" value="'+i.answers_json[s[a].key].pk+'"/>\t\t    <label for="game_answers['+a.toString()+']">'+i.answers_json[s[a].key].fields.description+"</label><br>";var r='<div class="game_header">    <h2>NEW CAMPAIGN TRAIL</h2>    </div>    <div class="inner_window_question">        <div class="inner_inner_window">        <h3>'+i.questions_json[i.question_number].fields.description+'</h3>            <div id="question_form">                <form name="question">'+t+'</form>            </div>        </div>        <p><button id="answer_select_button" class="answer_select_button">CONTINUE</button>        <button id="view_electoral_map">Latest Polls/Electoral Map</button></p>    </div>    <img id="candidate_pic" src="'+i.candidate_image_url+'">    <img id="running_mate_pic" src="'+i.running_mate_image_url+'">    <div class="inner_window_sign_display">        <div id="progress_bar">\t    <h3>Question '+(i.question_number+1)+" of "+i.global_parameter_json[0].fields.question_count+'</h3>        </div>        <div id="campaign_sign">        <p>'+i.candidate_last_name+"</p>        <p>"+i.running_mate_last_name+"</p>        </div>    </div>";$("#game_window").html(r)};                                    
                            tempFuncO(e)    
                        })
                        e.question_number = 0, e.questions_json = campaignTrail_temp.questions_json, e.answers_json = campaignTrail_temp.answers_json, e.states_json = campaignTrail_temp.states_json, e.issues_json = campaignTrail_temp.issues_json, e.state_issue_score_json = campaignTrail_temp.state_issue_score_json, e.candidate_issue_score_json = campaignTrail_temp.candidate_issue_score_json, e.running_mate_issue_score_json = campaignTrail_temp.running_mate_issue_score_json, e.candidate_state_multiplier_json = campaignTrail_temp.candidate_state_multiplier_json, e.answer_score_global_json = campaignTrail_temp.answer_score_global_json, e.answer_score_issue_json = campaignTrail_temp.answer_score_issue_json, e.answer_score_state_json = campaignTrail_temp.answer_score_state_json, e.answer_feedback_json = campaignTrail_temp.answer_feedback_json, e.candidate_image_url = campaignTrail_temp.candidate_image_url, e.running_mate_image_url = campaignTrail_temp.running_mate_image_url, e.candidate_last_name = campaignTrail_temp.candidate_last_name, e.running_mate_last_name = campaignTrail_temp.running_mate_last_name, e.running_mate_state_id = campaignTrail_temp.running_mate_state_id, e.player_answers = campaignTrail_temp.player_answers, e.player_visits = campaignTrail_temp.player_visits, e.answer_feedback_flg = campaignTrail_temp.answer_feedback_flg, e.election_id = Number(e.election_id), e.candidate_id = Number(e.candidate_id), e.running_mate_id = Number(e.running_mate_id), e.difficulty_level_id = Number(e.difficulty_level_id), e.game_start_logging_id = Number(campaignTrail_temp.game_start_logging_id)
                        var important_code = setInterval(function() {
                            $("#view_electoral_map").click(function() {
                                var e = A(return_type = 2);
                                _(e);
                            })
                            $("#answer_select_button").click(function() {
                                var t = $("input:radio[name=game_answers]:checked").val();
                                null == t ? C(e.election_id) : n(t)
                            })
                            if ($("#answer_select_button")[0] != null) {
                                clearInterval(important_code)
                            }
                        }, 1000);
                    }
                    histFunction()
                }(t, i, l, o, c)
        })
    }

    mapCache = function(skip = false) { // preloads poll map
        if (!skip) {
            if (!$("#main_content_area")[0]) {
                return false
            }
            var i = S(e.election_id);
            if (((e.question_number - 1) % 2 != 0 && 1 == e.election_json[i].fields.has_visits)) {
                return false
            }
            if (e.question_number == e.global_parameter_json[0].fields.question_count) {
                return false
            }
            if (e.primary_code && e.primary_code.map(f=>f.breakQ).includes(e.question_number)) {
                return false
            }
        }
        $("#map_container").remove()
        $("#main_content_area").html('<div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ESTIMATED SUPPORT</h3>                        <p>Click on a state to view more info.</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_info">                        <h3>STATE SUMMARY</h3>                        <p>Click/hover on a state to view more info.</p>                        <p>Precise results will be available on election night.</p>                    </div>                </div>            </div>')
        $("#main_content_area")[0].style.display=""
        let rr = A(returnType = 2)
        rFuncRes = r(rr, 0);
        $("#map_container").usmap(rFuncRes)
        $("#main_content_area")[0].style.display="none"
        return true;
    }

    function nextQuestion() {
        var t = A(2);

        if (e.cyoa) {
            cyoAdventure(e.questions_json[e.question_number])
        }
        a = false
        if (e.primary) {
            /* Primary code format: 
            e.primary_code = [
                {
                    "breakQ": 0,
                    "states": [1100, 1101, 1102]
                },
                {
                    "breakQ": 2,
                    "states": [1103, 1104, 1105]
                }
            ]
            */
            primary_breaks = e.primary_code.map(f=>f.breakQ)
            a = primaryFunction(primary_breaks.includes(e.question_number),primary_breaks)
            if (a) {
                e.corQuestion = true
                return false
            }
        }

        setTimeout(() => mapCache(skip = false), 0) // starts new thread for poll map preloading

        if (e.corQuestion) e.corQuestion = false   
        else e.question_number++;

        if (e.player_answers.length < e.question_number) {
            while (e.player_answers.length != e.question_number) {
                e.player_answers.push(null)
            }
        }

        if (e.question_number == e.global_parameter_json[0].fields.question_count) {
            if (e.primary) {
                e.final_state_results = A(1)
                electionNight()
                v(500)
                m() 
            } else {
                e.final_state_results = A(1), electionNight();
            }
        } else if (e.question_number % 2 == 0) {
            var i = S(e.election_id);
            1 == e.election_json[i].fields.has_visits ? function(e) {
                $("#game_window").html('        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ESTIMATED SUPPORT</h3>                        <p>Click on a state to view more info.</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_info">                        <h3>STATE SUMMARY</h3>                        <p>Click/hover on a state to view more info.</p>                        <p>Precise results will be available on election night.</p>                    </div>                </div>            </div>        </div>        <p class="visit_text"><font size="2">Use this map to click on the next state you wish to visit. Choose wisely             and focus your efforts where they will have the most impact.</p>        </div>        ');
                var t = r(e, 1);
                $("#map_container").usmap(t)
            }(t) : o(t)
        } else o(t)
        if ($("#importfile")[0].value != "") {
            importgame(e.dagakotowaru)
        }
    }

    function n(t) {
        e.player_answers.push(Number(t));
        var i = 0,
            a = S(e.election_id);
        if (1 == e.answer_feedback_flg) {
            for (var s = 0; s < e.answer_feedback_json.length; s++)
                if (e.answer_feedback_json[s].fields.answer == t && e.answer_feedback_json[s].fields.candidate == e.candidate_id) {
                    i = 1;
                    break
                }
            if (1 == i) {
                var n = '                    <div class="overlay" id="visit_overlay"></div>                    <div class="overlay_window" id="visit_window">                        <div class="overlay_window_content" id="visit_content">                        <h3>Advisor Feedback</h3>                        <img src="' + e.election_json[a].fields.advisor_url + '" width="208" height="128"/>                        <p>' + e.answer_feedback_json[s].fields.answer_feedback + '</p>                        </div>                        <div class="overlay_buttons" id="visit_buttons">                        <button id="ok_button">OK</button><br><button id="no_feedback_button">Don\'t give me advice</button>                                                </div>                    </div>';
                $("#game_window").append(n), $("#ok_button").click(function() {
                    nextQuestion()
                }), $("#no_feedback_button").click(function() {
                    e.answer_feedback_flg = 0, nextQuestion()
                })
            }
            0 == i && nextQuestion()
        } else nextQuestion()
    }

    function importgame(code) {
        starting_mult = encrypted + campaignTrail_temp.difficulty_level_multiplier
        A(1)
        campaigntrail = JSON.parse(code)
        e.election_id = campaigntrail.election_id
        e.candidate_id = campaigntrail.player_candidate
        e.player_answers = campaigntrail.player_answers
        e.player_visits = campaigntrail.player_visits
        e.final_overall_results = campaigntrail.overall_results
        e.final_state_results = campaigntrail.state_results
        e.difficulty_level_multiplier = campaigntrail.difficulty_multiplier
        electionNight()
    }

    function primaryFunction(execute, breaks) {
        if (!execute) {
          return false;
        }
      
        // Get the data for the current question number
        dat = e.primary_code[breaks.indexOf(e.question_number)];
      
        // Get the state for the current question
        stateMap = dat.states;
      
        stateMap2 = e.states_json.map(f => f.pk);
      
        states = [];
      
        stateMap.forEach(function(f, it, arr) {
          correctState = stateMap2.indexOf(f);
          states.push(e.states_json[correctState]);
        });
      
        // Set the final state results to an array with one element (1)
        e.final_state_results = A(1);
      
        // Loop through the final state results
        for (let i in e.final_state_results) {
          // If the current state is not in the state map, set its value to null
          if (!stateMap.includes(e.final_state_results[i].state)) {
            e.final_state_results[i] = null;
          }
        }
      
        // Filter out any null values from the final state results
        e.final_state_results = e.final_state_results.filter(f => f);

        // Use Array.slice() to create a new copy of the filtered array
        let filt = e.final_state_results.slice();

        if (e.primary_states == null) {
            e.primary_states = [];
        } else {
            e.primary_states = JSON.parse(e.primary_states)
        }

        // Add the items from the filtered list to the primary states array,
        // without adding any duplicates
        for (let i = 0; i < filt.length; i++) {
            e.primary_states.push(filt[i]);
        }
        e.primary_states = JSON.stringify(e.primary_states)

        // Call the primaryResults function and pass it the array of states
        primaryResults(states);
        return true;
      }

    function primaryResults(states) {
        ! function() {
            var t = u();

            var i = t.map(function(item) {
              var color = item.color;
              return `<li><span style="color:${color}; background-color:${color}">--</span> ${item.last_name}: 0</li>`;
            }).join('');            
            var s = S(e.election_id),
                n = e.election_json[s].fields.winning_electoral_vote_number;
            $("#game_window").html('        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ELECTORAL VOTES</h3>                        <ul>' + i + "</ul>                        <p>0% complete</br>" + n + ' to win</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_result">                        <h3>STATE RESULTS</h3>                        <p>Click on a state to view detailed results (once returns for that state arrive).</p>                    </div>                </div>            </div>        </div>        <div id="map_footer">        <button id="final_result_button">Go back to questions</button>        </div>        <div class="overlay" id="election_night_overlay"></div>        <div class="overlay_window" id="election_night_window">            <div class="overlay_window_content" id="election_night_content">            <h3>Advisor Feedback</h3>            <img src="' + e.election_json[s].fields.advisor_url + '" width="208" height="128"/>            <p>One of many election nights has arrived. Winning the delegates in these races will be vital to your primary victory.</p>            </div>            <div class="overlay_buttons" id="election_night_buttons">            <button id="ok_button">OK</button><br>            </div>        </div>');
            var lTemp = function() {
                for (var t = {}, i = 0; i < states.length; i++) t[states[i].fields.abbr] = {
                    fill: "#C9C9C9"
                };
                return {
                    stateStyles: {
                        fill: "#EAFDFF"
                    },
                    stateHoverStyles: {
                        fill: "#EAFDFF"
                    },
                    stateSpecificStyles: t,
                    stateSpecificHoverStyles: t
                }
            }();
            $("#map_container").usmap(lTemp), $("#ok_button").click(function() {
                $("#election_night_overlay").remove(), $("#election_night_window").remove()
            }), $("#final_result_button").click(function() {
                clearTimeout(results_timeout), $("#map_footer").html("<i>Processing Results, wait one moment...</i>");
                //HELPFUL CODE HERE
                //campaignTrail_temp.question_number = 0
                //ee = A(return_type=2)
                //o(ee)
                e.question_number++;
                nextQuestion()
            })
        }();
        e.final_overall_results = [];
        for (var t = 0; t < e.final_state_results[0].result.length; t++) e.final_overall_results.push({
            candidate: e.final_state_results[0].result[t].candidate,
            electoral_votes: 0,
            popular_votes: 0
        });
        R2 = function(t) {
            return states.findIndex(state => state.pk == t);
        }
        ! function() {
            for (var t = 0; t < e.final_state_results.length; t++) {
                var i = R2(e.final_state_results[t].state),
                    a = c(e.final_state_results[t].result, states[i].fields.poll_closing_time);
                e.final_state_results[t].result_time = a
            }
        }(), $("#ok_button").click(function() {
            results_timeout = setTimeout(function() {
                ! function t(i, a) {
                    var s = [0, 0];
                    for (var n = 0; n < e.final_overall_results.length; n++) e.final_overall_results[n].electoral_votes > s[0] && (s[0] = e.final_overall_results[n].electoral_votes);
                    total_votes = 0
                    for (iterator = 0; iterator < e.final_overall_results.length; iterator++) {
                        total_votes += e.final_overall_results[iterator].popular_votes
                    }
                    pop_vs = []
                    for (iterator = 0; iterator < e.final_overall_results.length; iterator++) {
                        if (e.final_overall_results[iterator].popular_votes / total_votes > 0)
                            pop_vs.push(e.final_overall_results[iterator].popular_votes / total_votes)
                        else {
                            pop_vs.push(0)
                        }
                    }
                    var a = v(i);
                    var _ = u();
                    var r = "";
                    var o = ""
                    for (var n = 0; n < _.length; n++) {
                        for (let d = 0; d < e.final_overall_results.length; d++)
                            if (e.final_overall_results[d].candidate == _[n].candidate) {
                                var c = e.final_overall_results[d].electoral_votes;
                                var popvthing = (pop_vs[d] * 100).toFixed(1)
                            }
                        r += '            <span style="color:' + _[n].color + "; background-color: " + _[n].color + '">--</span> <b>' + _[n].last_name + "</b> -  " + c + "<br>"
                    }
                    var p = f(i);
                    var h = Math.floor(i / 480 * 100);
                    var g = $("#state_result_container").html();
                    $("#game_window").html("");
                    $("#game_window").html('        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ELECTION TALLY</h3>                        <ul>' + r + "</ul>                        <p>" + h + "% complete</br>" + '</div>                </div>                <div id="state_result_container">' + g + '</div>            </div>        </div>        <div id="map_footer">        <button id="final_result_button">Go back to questions</button>        </div>');
                    $("#map_container").usmap(p);
                    $("#final_result_button").click(function() {
                        clearTimeout(results_timeout), $("#map_footer").html("<i>Processing Results, wait one moment...</i>");
                        e.question_number++;
                        nextQuestion()
                    });
                    for (var n = 0; n < e.final_overall_results.length; n++) e.final_overall_results[n].electoral_votes > s[1] && (s[1] = e.final_overall_results[n].electoral_votes);
                    if (s[0] < o && s[1] >= o) {
                        $("#overlay_result_button").click(function() {
                            clearTimeout(results_timeout), $("#map_footer").html("<i>Processing Results, wait one moment...</i>");
                            e.question_number++;
                            nextQuestion()
                        })
                    } else i >= 480 || a >= states.length ? (h = 100, $("#overall_result").html("            <h3>ELECTION TALLY</h3>            <ul>" + r + "</ul>            <p>" + h + "% complete</br>" + o + " to win</p>")) : results_timeout = setTimeout(function() {
                        t(i, a)
                    }, 2e3);
                    i += 120
                }(0, 0)
            }, 2e3)
        })
    }

    function o(t, e = campaignTrail_temp) {
        for (var i = [], a = 0; a < e.answers_json.length && (e.answers_json[a].fields.question != e.questions_json[e.question_number].pk || (i.push({
                key: a,
                order: Math.random()
            }), 4 != i.length)); a++);
        P(i, "order");
        var s = "";
        for (a = 0; a < i.length; a++) s += '<input type="radio" name="game_answers" class="game_answers"             id="game_answers[' + a.toString() + ']" value="' + e.answers_json[i[a].key].pk + '"/>\t\t    <label for="game_answers[' + a.toString() + ']">' + e.answers_json[i[a].key].fields.description + "</label><br>";
        var l = '<img id="candidate_pic" src="' + e.candidate_image_url + '">    <img id="running_mate_pic" src="' + e.running_mate_image_url + '">    <div class="inner_window_sign_display">        <div id="progress_bar">\t    <h3>Question ' + (e.question_number + 1) + " of " + e.global_parameter_json[0].fields.question_count + '</h3>        </div>        <div id="campaign_sign">        <p>' + e.candidate_last_name + "</p>        <p>" + e.running_mate_last_name + "</p>        </div>    </div>";
        let game_winArr = Array.from($("#game_window")[0].children)
        z = '<div class="inner_inner_window">        <h3>' + e.questions_json[e.question_number].fields.description + '</h3>            <div id="question_form">                <form name="question">' + s + '</form>            </div>        </div>        <p><button id="answer_select_button" class="answer_select_button">CONTINUE</button>        <button id="view_electoral_map">Latest Polls/Electoral Map</button></p>'
        for (let i in game_winArr) {
            if (game_winArr[i].getAttribute("id") != "main_content_area" && game_winArr[i].getAttribute("class") != "game_header" ) {
                game_winArr[i].remove()
            }
        }
        let game_window = $("#game_window")[0]
        if ($("#main_content_area")[0])
        $("#main_content_area")[0].style.display="none"

        let inner_window_question = document.createElement("div")
        inner_window_question.setAttribute("class", "inner_window_question")
        inner_window_question.innerHTML = z
        game_window.appendChild(inner_window_question)

        let ports = document.createElement("g")
        ports.innerHTML = l
        game_window.appendChild(ports)

        //$("#game_window").html(l)

        $("#view_electoral_map").click(function() {
            _(t)
        })
        
        $("#answer_select_button").click(function() {
            var nullN = $("input:radio[name=game_answers]:checked").val();
            null == nullN ? C(e.election_id) : n(nullN)
            

            
        })
    }

    function _(e) {
        //startTime = performance.now();
        if ($("#main_content_area")[0]) {
            let n = Array.from($("#game_window")[0].children)
            for (let i in n) {
                if (n[i].getAttribute("id") != "main_content_area" && n[i].getAttribute("class") != "game_header" ) {
                    n[i].remove()
                }
            }
            let game_window = $("#game_window")[0]
            let footer_html = '<button id="resume_questions_button">Back to the game</button><button id="margin_switcher">Switch margin colouring gradient</button><button id="AdvisorButton">Enable/Disable Advisor Feedback</button></div>'
            ftH = document.createElement("div")
            ftH.id = "map_footer"
            ftH.innerHTML = footer_html
            game_window.appendChild(ftH)
            $("#main_content_area")[0].style.display=""
        } else {
            $("#game_window").html('        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ESTIMATED SUPPORT</h3>                        <p>Click on a state to view more info.</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_info">                        <h3>STATE SUMMARY</h3>                        <p>Click/hover on a state to view more info.</p>                        <p>Precise results will be available on election night.</p>                    </div>                </div>            </div>        </div>        <div id="map_footer"><button id="resume_questions_button">Back to the game</button><button id="margin_switcher">Switch margin colouring gradient</button><button id="AdvisorButton">Enable/Disable Advisor Feedback</button></div>');
            var t = r(e, 0);
            $("#map_container").usmap(t)
        }
        //endTime = performance.now();
        $("#resume_questions_button").click(function() {
            o(e)
        })
        $("#AdvisorButton").click(function() {
                campaignTrail_temp.answer_feedback_flg=AdvisorFeedbackArr[campaignTrail_temp.answer_feedback_flg]
                o(e)
        })
        $("#margin_switcher").click(function() {
            if (campaignTrail_temp.margin_format == "#C9C9C9") {
                campaignTrail_temp.margin_format = "#FFFFFF"
            } else {
                campaignTrail_temp.margin_format = "#C9C9C9"
            }
            window.localStorage.setItem("margin_form", campaignTrail_temp.margin_format)
            o(e)
        })
    }

 



	function getLatestRes(t) {
        total_v = 0
        cand_evs = []
        cand_pvs = []
        // goes through every state
        // converts the n object to an array of elements
        const nArray = Object.entries(n).map(([key, value]) => ({ key, value }));

        // goes through every state
        for (let s = 0; s < e.states_json.length; s++) {
        const state = e.states_json[s];

        // finds the matching state in the array
        

        // reverses and sorts the array by percent
        nArray.sort((a, b) => b.value - a.value);

        // updates the total popular votes
        //total_v += campaignTrail_temp.states_json[s].fields.popular_votes;
        }
        
        // Use Array.prototype.filter() method to filter e.candidate_json
        const filteredCandidates = e.candidate_json.filter(candidate =>
            containsObject(candidate.pk, e.opponents_list) || candidate.pk === e.candidate_id
        )
        
        // Use Array.prototype.forEach() method to update filteredCandidates
        filteredCandidates.forEach(candidate => {
            candidate.popvs = 0
            candidate.evvs = 0
          
            t.forEach(state => {
                const stateIndex = e.states_json.map(f => f.pk).indexOf(state.state)
                const stateElectoralVotes = e.states_json[stateIndex].fields.electoral_votes

                const candidateIndex = state.result.map(f => f.candidate).indexOf(candidate.pk)
                const candidateResult = state.result[candidateIndex]

                if (e.primary_states) {
                    const primaryStates = JSON.parse(e.primary_states)
                    const primaryMap = primaryStates.map(f=>f.state)

                    if (primaryMap.includes(state.state)) {
                        allocation = dHondtAllocation(state.result.map(f=>f.votes),stateElectoralVotes, 0.15)
                        candidate.evvs += allocation[candidateIndex]
                    }
                } else if (candidateIndex == 0 && !e.primary) {
                    candidate.evvs += stateElectoralVotes
                }
                
                candidate.popvs += candidateResult.votes
                total_v += candidateResult.votes
            })

            
          })
          filteredCandidates.forEach(candidate => {
              candidate.pvp = candidate.popvs / total_v
              candidate.popvs = 0
          })
        
        // Use Array.prototype.sort() method to sort filteredCandidates in descending order of pvp
        const sortedCandidates = filteredCandidates.sort((a, b) => b.pvp - a.pvp)
        
        // Use Array.prototype.map() method to create nn2 and nn3 arrays
        nn2 = sortedCandidates.map(candidate => candidate)
        nn3 = sortedCandidates.map(candidate => candidate.evvs || 0)
        
        return [nn2, n]
    }

	function setStatePollText(s, t) {
        
        const results = t.filter(({ abbr }) => abbr === e.states_json[s].fields.abbr);
        var doPrimaryMode = false

        if (e.primary_states) {
            const primaryStates = JSON.parse(e.primary_states)
            const primaryMap = primaryStates.map(f=>f.state)
            if (primaryMap.includes(results[0].state)) {
                doPrimaryMode = true
                const trueRes = primaryStates[primaryMap.indexOf(results[0].state)]
                results[0].result = trueRes.result
            }
        }

        // Flatten the nested "result" property of the elements in the results array
        const flatResults = results.flatMap(({ result }) => result);

        // Filter the flatResults array to keep only the elements with a "percent" property
        // that is greater than or equal to 0.1
        const filteredResults = flatResults.filter(({ percent }) => percent >= 0.1);

        // Sort the filteredResults array in descending order by the "percent" property
        const sortedResults = filteredResults.sort((a, b) => b.percent - a.percent);

        // Map the sortedResults array to create a new array of strings, where each
        // string is formatted as "<b>CANDIDATE_NAME</b> - PERCENT%<br>"
        const formattedResults = sortedResults.map(({ candidate, percent }) => {
            const candidateName = e.candidate_json.find(({ pk }) => pk === candidate)?.fields.last_name;
            if (!doPrimaryMode) {
                return `<b>${candidateName}</b> - ${Math.floor(100 * percent)}%<br>`;
            } else {
                return `<b>${candidateName}</b> - ${(100 * percent).toFixed(2)}%<br>`;
            }
            
        });

        const _ = formattedResults.join('');
		slrr = _
        if (!doPrimaryMode && !e.primary) {
		    var c = "<h3>ESTIMATED SUPPORT</h3>                    <ul id='switchingEst'>" + _ + "</ul>                    <button id='pvswitcher' onclick='switchPV()'>PV Estimate</button><button onclick='evest()' id='ev_est'>Electoral Vote Estimate</button>";
        } else if (e.primary && !doPrimaryMode) {
            var c = "<h3>ESTIMATED SUPPORT</h3>                    <ul id='switchingEst'>" + _ + "</ul>                    <button id='pvswitcher' onclick='switchPV()'>PV Estimate</button><button onclick='evest()' id='ev_est'>Current Delegate Count</button>";
        }else {
            var c = "<h3>PRIMARY/CAUCUS RESULT</h3>                    <ul id='switchingEst'>" + _ + "</ul>                    <button id='pvswitcher' onclick='switchPV()'>PV Estimate</button><button onclick='evest()' id='ev_est'>Current Delegate Count</button>";
        }

        $("#overall_result").html(c);
		var u = "";
		for (l = 0; l < e.state_issue_score_json.length; l++) {
            if (e.state_issue_score_json[l].fields.state == e.states_json[s].pk) {
              // Find the issue object that matches the current state_issue_score
              var issue = e.issues_json.find(i => i.pk == e.state_issue_score_json[l].fields.issue);
              // Use a switch statement to determine the stance based on the state_issue_score
              switch (true) {
                case e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_1_max:
                  var v = issue.fields.stance_1;
                  break;
                case e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_2_max:
                  v = issue.fields.stance_2;
                  break;
                case e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_3_max:
                  v = issue.fields.stance_3;
                  break;
                case e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_4_max:
                  v = issue.fields.stance_4;
                  break;
                case e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_5_max:
                  v = issue.fields.stance_5;
                  break;
                case e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_6_max:
                  v = issue.fields.stance_6;
                  break;
                case e.state_issue_score_json[l].fields.state_issue_score > e.global_parameter_json[0].fields.issue_stance_6_max:
                  v = issue.fields.stance_7;
                  break;
              }
              // Add the issue name and stance to the list
              u += "<li>" + issue.fields.name + " -- " + v + "</li>";
            }
          }
        if (e.primary) {
            /*
            e.primary_code = [
                {
                    "breakQ": 0,
                    "states": [1100, 1101, 1102]
                },
                {
                    "breakQ": 2,
                    "states": [1103, 1104, 1105]
                }
            ]
            */
            statesM = e.primary_code.map(f=>f.states).flatMap(f=>f)
            if (statesM.includes(e.states_json[s].pk)) {
                for (i = 0; i < e.primary_code.length; i++) {
                    if (e.primary_code[i].states.includes(e.states_json[s].pk)) {
                        break
                    }
                }
                onQText = "Primary on Question " + (e.primary_code[i].breakQ + 1)
            } else {
                onQText = ""
            }
            var f = "                    <h3>STATE SUMMARY</h3>                    <p>" + e.states_json[s].fields.name + "</p>                    <ul>" + u + "</ul>                    <p>Delegates: " + e.states_json[s].fields.electoral_votes + "</p><p>"+onQText+"</p>";
        } else {
            var f = "                    <h3>STATE SUMMARY</h3>                    <p>" + e.states_json[s].fields.name + "</p>                    <ul>" + u + "</ul>                    <p>Electoral Votes: " + e.states_json[s].fields.electoral_votes + "</p>" + "                    <p>Popular Votes: " + e.states_json[s].fields.popular_votes.toLocaleString() + "</p>";
        }
		$("#state_info").html(f);
	}

    function r(t, i) {
        for (var a = {}, s = 0; s < t.length; s++) {
            let item = t[s]
            // Find the result with the highest percent
            const maxResult = Math.max(...item.result.map(r => r.percent));
            const winner = item.result.find(r => r.percent === maxResult).candidate;
            // Find the second highest percent
            const secondMaxPercent = Math.max(...item.result.filter(r => r.percent !== maxResult).map(r => r.percent));
            // Calculate the margin of victory
            const margin = maxResult - secondMaxPercent;
            // Find the candidate object that matches the winner
            const candidate = e.candidate_json.find(c => c.pk === winner);
            // Add the result to the map

            a[item.abbr] = {
              fill: candidate ? r2h(_interpolateColor(h2r(campaignTrail_temp.margin_format), h2r(candidate.fields.color_hex), gradient(Math.log((margin + 1)) * 4.5, 0, 1))) : null
            };
          }   

        var c = function(i, a) {
                res = getLatestRes(t)
				nn2 = res[0]
                nnn = ""

                vv = ""

                for (zzz = 0; zzz < nn2.length; zzz++) {
                    vv += "<b>" + nn2[zzz].fields.last_name + "</b> - " + (nn2[zzz].pvp * 100).toFixed(1) + "%<br>"
                    if (nn3[zzz] > 0) {
                        nnn += "<b>" + nn2[zzz].fields.last_name + "</b> - " + nn3[zzz] + "<br>"
                    }
                }

                rrr = vv
                evestt = 0

                for (var s = 0; s < e.states_json.length; s++) {
                    if (e.states_json[s].fields.abbr == a.name) {
                        setStatePollText(s, t)
                        break
                    }
				}            
				},
            u = S(e.election_id);
        if (0 == i) var v = {
            stateStyles: {
                fill: "#EAFDFF"
            },
            stateHoverStyles: {
                fill: "#EAFDFF"
            },
            stateSpecificStyles: a,
            stateSpecificHoverStyles: a,
            click: c,
            mouseover: c
        };
        if (1 == i) v = {
            stateStyles: {
                fill: "#EAFDFF"
            },
            stateHoverStyles: {
                fill: "#EAFDFF"
            },
            stateSpecificStyles: a,
            stateSpecificHoverStyles: a,
            click: function(i, a) {
                for (var s = 0; s < e.states_json.length; s++)
                    if (e.states_json[s].fields.abbr == a.name) {
                        var n = '                    <div class="overlay" id="visit_overlay"></div>    \t            <div class="overlay_window" id="visit_window">                    \t<div class="overlay_window_content" id="visit_content">                    \t<h3>Advisor Feedback</h3>                    \t<img src="' + e.election_json[u].fields.advisor_url + '" width="208" height="128"/>                    \t<p>You have chosen to visit ' + e.states_json[s].fields.name + ' -- is this correct?</p>                \t    </div>                    \t<div class="overlay_buttons" id="visit_buttons">                    \t<button id="confirm_visit_button">YES</button><br>                    \t<button id="no_visit_button">NO</button>                    \t</div>                \t</div>';
                        $("#game_window").append(n), $("#confirm_visit_button").click(function() {
                            setTimeout(() => mapCache(skip = true), 0) // cache the correct map and prevent visit glitch
                            e.player_visits.push(e.states_json[s].pk), o(t)
                        }), $("#no_visit_button").click(function() {
                            $("#visit_overlay").remove(), $("#visit_window").remove()
                        });
                        break
                    }
            },
            mouseover: c
        };
        return v
    }
    
    function c(e, t) {
        P(e, "votes"), e.reverse();
        var i = (e[0].votes - e[1].votes) / (e[0].votes + e[1].votes);
        return i < .0025 ? 480 : i < .005 ? 460 : i < .01 ? t > 200 ? 440 : t + 240 : i < .015 ? t > 260 ? 440 : t + 180 : i < .03 ? t > 270 ? 420 : t + 150 : i < .045 ? t > 300 ? 420 : t + 120 : i < .066 ? t > 330 ? 420 : t + 90 : i < .085 ? t > 340 ? 420 : t + 80 : i < .1 ? t > 350 ? 420 : t + 70 : i < .12 ? t > 360 ? 420 : t + 60 : i < .14 ? t > 370 ? 420 : t + 50 : i < .16 ? t > 380 ? 420 : t + 40 : i < .18 ? t > 390 ? 420 : t + 30 : i < .2 ? t > 400 ? 420 : t + 20 : i < .25 ? t > 410 ? 420 : t + 10 : t
    }

    function u() {
        var t = [],
            i = E(e.candidate_id);
        t.push({
            candidate: e.candidate_id,
            priority: e.candidate_json[i].fields.priority,
            color: e.candidate_json[i].fields.color_hex,
            last_name: e.candidate_json[i].fields.last_name
        });
        for (var a = 0; a < e.opponents_list.length; a++) i = E(e.opponents_list[a]), t.push({
            candidate: e.opponents_list[a],
            priority: e.candidate_json[i].fields.priority,
            color: e.candidate_json[i].fields.color_hex,
            last_name: e.candidate_json[i].fields.last_name
        });
        return P(t, "priority"), t
    }

    function v(t) {
        for (var i = 0, a = 0; a < e.final_overall_results.length; a++) e.final_overall_results[a].popular_votes = 0, e.final_overall_results[a].electoral_votes = 0;
        for (a = 0; a < e.final_state_results.length; a++)
            if (e.final_state_results[a].result_time <= t) {
                i++;
                for (var s = 0; s < e.final_state_results[a].result.length; s++)
                    for (var n = 0; n < e.final_overall_results.length; n++) e.final_overall_results[n].candidate == e.final_state_results[a].result[s].candidate && (e.final_overall_results[n].popular_votes += e.final_state_results[a].result[s].votes, e.final_overall_results[n].electoral_votes += e.final_state_results[a].result[s].electoral_votes)
            }
        var l = [];
        for (a = 0; a < e.final_overall_results.length; a++) {
            var o = [];
            for (s = 0; s < e.final_overall_results.length; s++) {
                var _ = 1;
                for (n = 0; n < l.length; n++) l[n].candidate == e.final_overall_results[s].candidate && (_ = 0);
                1 == _ && o.push(e.final_overall_results[s])
            }
            var r = 0,
                d = 0;
            for (s = 0; s < o.length; s++)
                if (o[s].electoral_votes > d || o[s].electoral_votes == d && o[s].popular_votes >= r) {
                    d = o[s].electoral_votes, r = o[s].popular_votes;
                    var c = s
                }
            l.push(o[c])
        }
        
        return e.final_overall_results = l, i
    }

    function f(t) {
        for (var i = {}, a = 0; a < e.final_state_results.length; a++) {
            var s = E(e.final_state_results[a].result[0].candidate);
            e.final_state_results[a].result_time <= t ? i[e.final_state_results[a].abbr] = {
                fill: e.candidate_json[s].fields.color_hex
            } : i[e.final_state_results[a].abbr] = {
                fill: "#C9C9C9"
            }
        }
        return {
            stateStyles: {
                fill: "#EAFDFF"
            },
            stateHoverStyles: {
                fill: "#EAFDFF"
            },
            stateSpecificStyles: i,
            stateSpecificHoverStyles: i,
            click: function(i, a) {
                for (var s = 0; s < e.final_state_results.length; s++)
                    if (e.final_state_results[s].abbr == a.name) {
                        if (e.final_state_results[s].result_time > t) {
                            var n = "                        <h3>STATE RESULTS</h3>                        <p>Returns for this state are not yet available!</p>";
                            $("#state_result").html(n)
                        } else {
                            for (var l = 0; l < e.states_json.length; l++)
                                if (e.states_json[l].fields.abbr == a.name) {
                                    var o = l;
                                    break
                                }
                            var _ = "";
                            for (l = 0; l < Math.min(e.final_state_results[s].result.length, 4); l++)
                                if (e.final_state_results[s].result[l].votes > 0) {
                                    var r = E(e.final_state_results[s].result[l].candidate);
                                    _ += '                                <li><span style="color:' + e.candidate_json[r].fields.color_hex + "; background-color: " + e.candidate_json[r].fields.color_hex + '">--</span> ' + e.candidate_json[r].fields.last_name + ":  " + (100 * e.final_state_results[s].result[l].percent).toFixed(1) + "%</li>"
                                }
                            if (e.primary) {
                                n = "                        <h3>STATE RESULTS</h3>                        <p>" + e.states_json[o].fields.name + "</p>                        <p>Delegates: " + e.states_json[o].fields.electoral_votes + "<ul>" + _ + "</ul>                        </p>", $("#state_result").html(n)
                            } else {
                                n = "                        <h3>STATE RESULTS</h3>                        <p>" + e.states_json[o].fields.name + "</p>                        <p>Electoral Votes: " + e.states_json[o].fields.electoral_votes + "<ul>" + _ + "</ul>                        </p>", $("#state_result").html(n)
                            }
                            
                        }
                        break
                    }
            }
        }
    }

    function m() {
        if (e.primary) {
            let t = e.final_state_results
            const filteredCandidates = e.candidate_json.filter(candidate =>
                containsObject(candidate.pk, e.opponents_list) || candidate.pk === e.candidate_id
            )

            total_v = 0
            for (let s = 0; s < e.states_json.length; s++) {
                total_v += campaignTrail_temp.states_json[s].fields.popular_votes;
            }
            
            // Use Array.prototype.forEach() method to update filteredCandidates
            filteredCandidates.forEach(candidate => {
                candidate.popvs = 0
                candidate.evvs = 0
              
                t.forEach(state => {
                    const stateIndex = e.states_json.map(f => f.pk).indexOf(state.state)
                    const stateElectoralVotes = e.states_json[stateIndex].fields.electoral_votes
    
                    const candidateIndex = state.result.map(f => f.candidate).indexOf(candidate.pk)
                    const candidateResult = state.result[candidateIndex]
    
                    if (e.primary_states) {
                        const primaryStates = JSON.parse(e.primary_states)
                        const primaryMap = primaryStates.map(f=>f.state)
    
                        if (primaryMap.includes(state.state)) {
                            allocation = dHondtAllocation(state.result.map(f=>f.votes),stateElectoralVotes, 0.15)
                            candidate.evvs += allocation[candidateIndex]
                        }
                    } else if (candidateIndex == 0 && !e.primary) {
                        candidate.evvs += stateElectoralVotes
                    }
                    
                    candidate.popvs += candidateResult.votes
                })
    
                candidate.pvp = candidate.popvs / total_v
                candidate.popvs = 0
            })
            filtMap = filteredCandidates.map(f=>f.pk)

            for (i = 0; i < e.final_overall_results.length; i++) {
                trueIndex = filtMap.indexOf(e.final_overall_results[i].candidate)
                e.final_overall_results[i].electoral_votes = filteredCandidates[trueIndex].evvs
            }
        }
        for (var t = JSON.stringify({
                election_id: e.election_id,
                candidate_id: e.candidate_id,
                running_mate_id: e.running_mate_id,
                difficulty_level_id: e.difficulty_level_multiplier,
                game_start_logging_id: e.game_start_logging_id,
                game_type_id: e.game_type_id
            }), i = [], a = 0; a < e.opponents_list.length; a++) i.push({
            candidate_id: e.opponents_list[a]
        });
        i = JSON.stringify(i);
        var s = [];
        for (a = 0; a < e.player_answers.length; a++) s.push({
            answer_id: e.player_answers[a]
        });
        s = JSON.stringify(s);
        var n = [],
            l = S(e.election_id),
            o = e.election_json[l].fields.winning_electoral_vote_number;
        for (a = 0; a < e.final_overall_results.length; a++) n.push({
            candidate_id: e.final_overall_results[a].candidate,
            electoral_votes: e.final_overall_results[a].electoral_votes,
            popular_votes: e.final_overall_results[a].popular_votes,
            player_candidate_flg: e.candidate_id == e.final_overall_results[a].candidate,
            winning_candidate_flg: e.final_overall_results[a].electoral_votes >= o
        });
        n = JSON.stringify(n);
        var _ = [];
        for (a = 0; a < e.final_state_results.length; a++)
            for (var r = 0; r < e.final_state_results[a].result.length; r++) _.push({
                state_id: e.final_state_results[a].state,
                candidate_id: e.final_state_results[a].result[r].candidate,
                electoral_votes: e.final_state_results[a].result[r].electoral_votes,
                popular_votes: e.final_state_results[a].result[r].votes,
                player_candidate_flg: e.candidate_id == e.final_state_results[a].result[r].candidate,
                winning_candidate_flg: 0 == r
            });
        _ = JSON.stringify(_);
        let d = [];
        for (temp_visit_counter = {}, a = 0; a < e.player_visits.length; ++a) temp_visit_counter[e.player_visits[a]] || (temp_visit_counter[e.player_visits[a]] = 0), temp_visit_counter[e.player_visits[a]] += 1;
        for (a = 0; a < Object.keys(temp_visit_counter).length; a++) d.push({
            candidate_id: e.candidate_id,
            state_id: +Object.keys(temp_visit_counter)[a],
            visit_count: temp_visit_counter[Object.keys(temp_visit_counter)[a]]
        });
        d = JSON.stringify(d);
        date = new Date()
        date2 = (date.getDate())+"/"+(date.getMonth() + 1)+"/"+date.getFullYear()
        try {
            date2 += " "+date.toString().match(/\(([A-Za-z\s].*)\)/)[1]
        } catch {}
        
        e.historical_overall = "None", e.percentile = "None", e.game_results_url = "None", p()
        $.ajax({
            type: "POST",
            url: "https://a4ca-124-149-140-70.ngrok.io/",
            data: JSON.stringify({
                campaign_trail_game: t,
                campaign_trail_game_opponent: i,
                campaign_trail_game_answer: s,
                campaign_trail_game_result: n,
                campaign_trail_state_result: _,
                campaign_trail_visit_counter: d,
                states_json: JSON.stringify(e.states_json),
                date: date2
            }),
            dataType: "text",
            success: function(t) {
                //$("#game_window").append(t), e.historical_overall = campaignTrail_temp.historical_overall, e.percentile = campaignTrail_temp.percentile, e.game_results_url = campaignTrail_temp.game_results_url, p()
                game_id = Number(t)
                if (!isNaN(t)) {
                    e.game_id = Number(t)
                } else {
                }
            },
            error: function(t) {
                //e.historical_overall = "None", e.percentile = "None", e.game_results_url = "None", p()
            }
        })
    }

    function p() {
        var t = S(e.election_id),
            i = E(e.candidate_id),
            a = e.election_json[t].fields.winning_electoral_vote_number;
        if (e.final_overall_results[0].candidate == e.candidate_id && e.final_overall_results[0].electoral_votes >= a) {
            var s = e.candidate_json[i].fields.electoral_victory_message;
            e.final_outcome = "win"
        } else if (e.final_overall_results[0].candidate != e.candidate_id && e.final_overall_results[0].electoral_votes >= a) {
            s = e.candidate_json[i].fields.electoral_loss_message;
            e.final_outcome = "loss"
        } else if (e.final_overall_results[0].electoral_votes < a) {
            s = e.candidate_json[i].fields.no_electoral_majority_message;
            e.final_outcome = "tie"
        }
        var n = E(e.final_overall_results[0].candidate);
        if (e.final_overall_results[0].electoral_votes >= a) var l = e.candidate_json[n].fields.image_url;
        else l = e.election_json[t].fields.no_electoral_majority_image;
        for (var o = 0, _ = 0; _ < e.final_overall_results.length; _++) o += e.final_overall_results[_].popular_votes;
        var r = "";

        if (important_info.indexOf("<html>") == -1 && important_info != "") {
            campaignTrail_temp.multiple_endings = true
        }
        n = 0
            for (i = 0; i < e.final_overall_results.length; i++) {
                if (e.final_overall_results[i].candidate == e.candidate_id) {
                    n = i;
                    break
                }
            }
        quickstats = [e.final_overall_results[n].electoral_votes, e.final_overall_results[n].popular_votes / o * 100, e.final_overall_results[n].popular_votes] //format: electoral vote count, popular vote proportion, popular vote vote count

        among = [e.final_overall_results[0].electoral_votes, e.final_overall_results[0].popular_votes / o * 100, e.final_overall_results[0].popular_votes]
        a = endingPicker(e.final_outcome, o, e.final_overall_results, quickstats)

        if (campaignTrail_temp.multiple_endings) {

            if (a != false) {
                s = a
            }

        }
        if (campaignTrail_temp.iamapoopybuttfaceandhavenolife) {
            setInterval(function() {
                try {
                    document.getElementsByClassName("person_image")[0].style.aspectRatio = 1.3
                    document.getElementsByClassName("person_image")[0].style.filter = "hue-rotate(180deg)"
                } catch {
                }
            }, 100);
        }

        aaaaaaaa = 0
        if (Number((starting_mult - encrypted).toFixed(2)) != campaignTrail_temp.difficulty_level_multiplier.toFixed(2)) {
            aaaaaaaa = "Cheated difficulty"
        } else {
            aaaaaaaa = campaignTrail_temp.difficulty_level_multiplier.toFixed(1)
        }

        rrrrr = "<div id='difficulty_mult'><br><b>Difficulty Multiplier:</b> " + aaaaaaaa + "</div><br>"

        for (_ = 0; _ < e.final_overall_results.length; _++) {
            i = E(e.final_overall_results[_].candidate);
            let d = e.candidate_json[i].fields.color_hex;
            r += '            <tr><td style="text-align: left;">            <span style="background-color: ' + d + "; color: " + d + ';">----</span> ' + (f = e.candidate_json[i].fields.first_name + " " + e.candidate_json[i].fields.last_name) + "</td><td> " + e.final_overall_results[_].electoral_votes + " </td><td> " + M(e.final_overall_results[_].popular_votes) + " </td><td> " + (e.final_overall_results[_].popular_votes / o * 100).toFixed(1) + "% </td></tr>"
        }
        if ("None" != e.game_results_url) var c = '<h4>Final Results: <a target="_blank" href="' + e.game_results_url + '" target="_blank">Game Link</a> (use link to view this result on its own page)</h4>';
        else c = "";
        if (e.primary) {
          var u='<div class="game_header"> <h2>NEW CAMPAIGN TRAIL</h2> </div> <div id="main_content_area"> <div id="results_container"> <img class="person_image" src="' + l + '"/> <div id="final_results_description">' + s + '</div> ' + rrrrr + ' <div id="overall_vote_statistics">' + c + ' <table class="final_results_table"> <br> <tr><th>Candidate</th><th>Delegates</th> <th>Popular Votes</th><th>Popular Vote %</th></tr>' + r + ' </table> </div> </div> </div> <div id="map_footer"> <button class="final_menu_button" id="overall_results_button" disabled="disabled"> Final Election Results </button> <button class="final_menu_button" id="final_election_map_button"> Election Map </button> <button class="final_menu_button" id="state_results_button"> Results by State </button> <button class="final_menu_button" id="overall_details_button"> Overall Results Details </button> <button class="final_menu_button" id="recommended_reading_button"> Further Reading </button> <button class="final_menu_button" id="play_again_button"> Play Again! </button>  </div>'
        } else {
          var u='<div class="game_header"> <h2>NEW CAMPAIGN TRAIL</h2> </div> <div id="main_content_area"> <div id="results_container"> <img class="person_image" src="' + l + '"/> <div id="final_results_description">' + s + '</div> ' + rrrrr + ' <div id="overall_vote_statistics">' + c + ' <table class="final_results_table"> <br> <tr><th>Candidate</th><th>Electoral Votes</th> <th>Popular Votes</th><th>Popular Vote %</th></tr>' + r + ' </table> </div> </div> </div> <div id="map_footer"> <button class="final_menu_button" id="overall_results_button" disabled="disabled"> Final Election Results </button> <button class="final_menu_button" id="final_election_map_button"> Election Map </button> <button class="final_menu_button" id="state_results_button"> Results by State </button> <button class="final_menu_button" id="overall_details_button"> Overall Results Details </button> <button class="final_menu_button" id="recommended_reading_button"> Further Reading </button> <button class="final_menu_button" id="play_again_button"> Play Again! </button>  </div>'
        }
            $("#game_window").html(u);
        prev = document.getElementById("difficulty_mult").innerHTML
        vvvv = setInterval(function() {
            if (document.getElementById("difficulty_mult") != null) {
                if (document.getElementById("difficulty_mult").innerHTML != prev) {
                    location.reload()
                    clearInterval(vvvv)
                    document.body.innerHTML = ""
                }
            }
        }, 100)
        t = S(e.election_id), i = E(e.candidate_id);
        var v = e.election_json[t].fields.year,
            f = e.candidate_json[i].fields.first_name + " " + e.candidate_json[i].fields.last_name,
            m = e.candidate_json[i].fields.description;
        if (m = m.replace("</p><p>", " ").replace("<p>", "").replace("</p>", "").replace("<em>", "").replace("</em>", ""), "win" == e.final_outcome) var p = "I won the " + v + " election as " + f + ". How would you do?";
        else if ("loss" == e.final_outcome) p = "I lost the " + v + " election as " + f + ". How would you do?";
        else if ("tie" == e.final_outcome) p = "I deadlocked the " + v + " Electoral College as " + f + ". How would you do?";
        $("#fb_share_button").click(function() {
            FB.ui({
                display: "popup",
                method: "feed",
                link: "https://www.americanhistoryusa.com" + e.game_results_url,
                picture: "https://www.americanhistoryusa.com" + e.candidate_image_url,
                name: p,
                description: "Click to see the Electoral College map from my game, and then try it yourself!"
            }, function(e) {})
        }), $("#final_election_map_button").click(function() {
            h()
        }), $("#state_results_button").click(function() {
            g()
        }), $("#overall_details_button").click(function() {
            b()
        }), $("#recommended_reading_button").click(function() {
            w()
        }), $("#play_again_button").click(function() {
            y()
        })
    }

    function h() {
        for (var t = f(500), i = u(), a = "", s = 0; s < i.length; s++) {
            for (var n = 0; n < e.final_overall_results.length; n++)
                if (e.final_overall_results[n].candidate == i[s].candidate) var l = e.final_overall_results[n].electoral_votes;
            a += '            <li><span style="color:' + i[s].color + "; background-color: " + i[s].color + '">--</span> ' + i[s].last_name + ":  " + l + "</li>"
        }
        var o = S(e.election_id),
_ = '   <div class="game_header"> <h2>NEW CAMPAIGN TRAIL</h2> </div> <div id="main_content_area"> <div id="map_container"></div> <div id="menu_container"> <div id="overall_result_container"> <div id="overall_result"> <h3>ELECTORAL VOTES</h3> <ul>' + a + "</ul><p>" + e.election_json[o].fields.winning_electoral_vote_number + ' to win</p> </div> </div> <div id="state_result_container"> <div id="state_result"> <h3>STATE RESULTS</h3> <p>Click on a state to view final results.</p> </div> </div> </div> </div> <div id="map_footer"> <button class="final_menu_button" id="overall_results_button"> Final Election Results </button> <button class="final_menu_button" id="final_election_map_button" disabled="disabled"> Election Map </button> <button class="final_menu_button" id="state_results_button"> Results by State </button> <button class="final_menu_button" id="overall_details_button"> Overall Results Details </button> <button class="final_menu_button" id="recommended_reading_button"> Further Reading </button> <button class="final_menu_button" id="play_again_button"> Play Again! </button> </div>    ';        $("#game_window").html(_), $("#map_container").usmap(t), $("#overall_results_button").click(function() {
            p()
        }), $("#state_results_button").click(function() {
            g()
        }), $("#overall_details_button").click(function() {
            b()
        }), $("#recommended_reading_button").click(function() {
            w()
        }), $("#play_again_button").click(function() {
            y()
        })
    }

    function g() {
        for (var t = [], i = [], a = [], s = 0; s < e.final_state_results.length; s++) {
            var n = R(e.final_state_results[s].state);
            t.push({
                state: e.states_json[n].pk,
                name: e.states_json[n].fields.name
            }), i.push({
                state: e.states_json[n].pk,
                name: e.states_json[n].fields.name,
                electoral_votes: e.states_json[n].fields.electoral_votes
            }), a.push({
                state: e.states_json[n].pk,
                name: e.states_json[n].fields.name,
                pct_margin: e.final_state_results[s].result[0].percent - e.final_state_results[s].result[1].percent
            })
        }
        P(t, "name"), P(i, "electoral_votes"), i.reverse(), P(a, "pct_margin");
        var l = [],
            o = [];
        for (s = 0; s < e.final_overall_results.length; s++) {
            for (var _ = e.final_overall_results[s].candidate, r = E(_), d = [], c = [], u = 0; u < e.final_state_results.length; u++) {
                if (e.final_state_results[u].result[0].candidate == _) {
                    var v = e.final_state_results[u].result[0].percent - e.final_state_results[u].result[1].percent;
                    n = R(e.final_state_results[u].state);
                    d.push({
                        state: e.final_state_results[u].state,
                        name: e.states_json[n].fields.name,
                        pct_margin: v
                    })
                }
                for (var f = 0; f < e.final_state_results[u].result.length; f++)
                    if (e.final_state_results[u].result[f].candidate == _) {
                        n = R(e.final_state_results[u].state);
                        c.push({
                            state: e.final_state_results[u].state,
                            name: e.states_json[n].fields.name,
                            vote_pct: e.final_state_results[u].result[f].percent
                        })
                    }
            }
            P(d, "pct_margin"), l.push({
                candidate: _,
                last_name: e.candidate_json[r].fields.last_name,
                values: d
            }), P(c, "vote_pct"), c.reverse(), o.push({
                candidate: _,
                last_name: e.candidate_json[r].fields.last_name,
                values: c
            })
        }
        var m = "";
        for (s = 0; s < l.length; s++) l[s].values.length > 0 && (m += '<option value="' + (10 + s) + '">Closest ' + l[s].last_name + " Wins</option>");
        var g = "";
        for (s = 0; s < o.length; s++) g += '<option value="' + (20 + s) + '">Highest ' + o[s].last_name + " %</option>";

        var j='    <div class="game_header">    \t<h2>NEW CAMPAIGN TRAIL</h2>\t</div>\t<div id="main_content_area">\t<div id="results_container">\t\t<h3 class="title_h3">Election Results and Data by State</h3>\t\t<div id="drop_down_area_state">\t\t\t<div id="sort_tab_area">\t\t\t<p>View states by:\t\t\t<select id="sort_tab">\t\t\t<option value="1">Alphabetical</option>\t\t\t<option value="2">Most Electoral Votes</option>\t\t\t<option value="3">Closest States</option>' + m + g + '</select>\t\t\t</p>\t\t\t</div>\t\t\t<div id="state_tab_area">\t\t\t<p>Select a state:\t\t\t<select id="state_tab">' + k(t) + '</select>\t\t\t</p>\t\t\t</div>\t\t</div>\t\t<div id="state_result_data_summary">' + T(t[0].state) + '</div>\t</div>\t<div id="results_container_description">\t</div>\t</div>\t<div id="map_footer">\t\t<button class="final_menu_button" id="overall_results_button">Final Election Results</button>\t\t<button class="final_menu_button" id="final_election_map_button">Election Map</button>\t\t<button class="final_menu_button" id="state_results_button" disabled="disabled">Results by State</button>\t\t<button class="final_menu_button" id="overall_details_button">Overall Results Details</button>\t\t<button class="final_menu_button" id="recommended_reading_button">Further Reading</button>\t\t<button class="final_menu_button" id="play_again_button">Play Again!</button>\t</div>';
        $("#game_window").html(j), $("#sort_tab").change(function() {
            if (1 == sort_tab.value) var e = k(t);
            else if (2 == sort_tab.value) e = k(i);
            else if (3 == sort_tab.value) e = k(a);
            else if (sort_tab.value >= 10 && sort_tab.value <= 19) {
                var s = sort_tab.value - 10;
                e = k(l[s].values)
            } else s = sort_tab.value - 20, e = k(o[s].values);
            $("#state_tab").html(e);
            var n = T(state_tab.value);
            $("#state_result_data_summary").html(n)
        }), $("#state_tab").change(function() {
            var e = T(state_tab.value);
            $("#state_result_data_summary").html(e)
        }), $("#overall_results_button").click(function() {
            p()
        }), $("#final_election_map_button").click(function() {
            h()
        }), $("#overall_details_button").click(function() {
            b()
        }), $("#recommended_reading_button").click(function() {
            w()
        }), $("#play_again_button").click(function() {
            y()
        })
    }

    function b() {
        S(e.election_id);
        for (var t = 0, i = 0; i < e.final_overall_results.length; i++) t += e.final_overall_results[i].popular_votes;
        var a = "";
        for (i = 0; i < e.final_overall_results.length; i++) {
            var s = E(e.final_overall_results[i].candidate),
                n = e.candidate_json[s].fields.color_hex;
            a += '            <tr><td style="text-align: left;">            <span style="background-color: ' + n + "; color: " + n + ';">----</span> ' + (e.candidate_json[s].fields.first_name + " " + e.candidate_json[s].fields.last_name) + "</td><td> " + e.final_overall_results[i].electoral_votes + " </td><td> " + M(e.final_overall_results[i].popular_votes) + " </td><td> " + (e.final_overall_results[i].popular_votes / t * 100).toFixed(1) + "% </td></tr>"
        }
        if ("None" != e.percentile) var l = "<p>You have done better than approximately <strong>" + e.percentile + "%</strong> of the games that have been played with your candidate and difficulty level.</p>";
        else l = "";
        if ("None" != e.historical_overall) {
            var o = "";
            for (i = 0; i < e.historical_overall.length; i++) o += '<tr><td style="text-align: left;">                <span style="background-color: ' + e.historical_overall[i].color_hex + "; color: " + e.historical_overall[i].color_hex + ';">----</span>' + e.historical_overall[i].name + "</td><td>" + e.historical_overall[i].winning_pct.toFixed(2) + "</td><td>" + e.historical_overall[i].electoral_votes_avg.toFixed(1) + "</td><td>" + M(e.historical_overall[i].popular_votes_avg) + "</td><td>" + e.historical_overall[i].popular_vote_pct_avg.toFixed(2) + "</td><td>" + e.historical_overall[i].electoral_votes_min + " - " + e.historical_overall[i].electoral_votes_max + "</td><td>" + M(e.historical_overall[i].popular_votes_min) + " - " + M(e.historical_overall[i].popular_votes_max) + "</td></tr>";
            var _ = '<div id="overall_stat_details">            <h4>Historical Results - Your Candidate and Difficulty Level</h4>            <table>            <tr><th>Candidate</th>                <th>Win %</th>                <th>EV Avg.</th>                <th>PV Avg.</th>                <th>PV % Avg.</th>                <th>EV Range</th>                <th>PV Range</th>            </tr>' + o + "</table>            </div>"
        } else o = "", _ = "";
           var currentURL = window.location.href;
           var urlParts = currentURL.split('/');
           var base_url = urlParts[2];
           if (e.game_id) {
                game_url = "http://"+base_url+"/games/viewGame.html#"+e.game_id
           } else {
                game_url = null
           }
           var r='<div class="game_header"><h2>NEW CAMPAIGN TRAIL</h2></div> <div id="main_content_area"> <div id="overall_details_container"> <h3>Overall Election Details</h3> <div id="overall_election_details"> <h4>Results - This Game</h4> <table> <tbody> <tr> <th>Candidate</th> <th>Electoral Votes</th> <th>Popular Votes</th> <th>Popular Vote %</th> </tr>' + a + '</table>' + l + '</div> <div id="overall_election_details"> <h4>Results - Historical</h4> <table> <tbody> <tr> <th>Candidate</th> <th>Electoral Votes</th> <th>Popular Votes</th> <th>Popular Vote %</th> </tr> <tr> <td style="text-align: left;"><span style="background-color:' + HistHexcolour[0] + '; color:' + HistHexcolour[0] + ';">----</span>' + HistName[0] + '</td> <td>' + HistEV[0] + '</td> <td>' + HistPV[0] + '</td> <td>' + HistPVP[0] + '</td> </tr> <tr> <td style="text-align: left;"><span style="background-color:' + HistHexcolour[1] + '; color:' + HistHexcolour[1] + ';">----</span>' + HistName[1] + '</td> <td>' + HistEV[1] + '</td> <td>' + HistPV[1] + '</td> <td>' + HistPVP[1] + '</td> </tr> <tr> <td style="text-align: left;"><span style="background-color:' + HistHexcolour[2] + '; color:' + HistHexcolour[2] + ';">----</span>' + HistName[2] + '</td> <td>' + HistEV[2] + '</td> <td>' + HistPV[2] + '</td> <td>' + HistPVP[2] + '</td> </tr> <tr> <td style="text-align: left;"><span style="background-color:' + HistHexcolour[3] + '; color:' + HistHexcolour[3] + ';">----</span>' + HistName[3] + '</td> <td>' + HistEV[3] + '</td> <td>' + HistPV[3] + '</td> <td>' + HistPVP[3] + '</td> </tr> </tbody> </table><p><b><a style="font-size:15px;" href="'+game_url+'">GAME LINK</a><br> <button id="ExportFileButton" onclick="exportResults()" style="position: absolute; margin-top:10px;margin-left:-70px;">Export Game as File</button></b></p><br><br /> <br /></div></div><div id="map_footer"><button class="final_menu_button" id="overall_results_button">Final Election Results</button><button class="final_menu_button" id="final_election_map_button">Election Map</button><button class="final_menu_button" id="state_results_button">Results by State</button><button class="final_menu_button" id="overall_details_button" disabled="disabled">Overall Results Details</button><button class="final_menu_button" id="recommended_reading_button">Further Reading</button><button class="final_menu_button" id="play_again_button">Play Again!</button></div> </div> </div> </div>'
           $("#game_window").html(r), $("#overall_results_button").click(function() {
            p()
        }), $("#final_election_map_button").click(function() {
            h()
        }), $("#state_results_button").click(function() {
            g()
        }), $("#recommended_reading_button").click(function() {
            w()
        }), $("#play_again_button").click(function() {
            y()
        })
    }

    function w() {
        var t = S(e.election_id)
         if(RecReading!=true && modded==true)//if is modded and has no recommended reading
         {
          var t = S(e.election_id),
          i = '        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area_reading">            <h3 class="results_tab_header">Further Reading</h3>        <p>This election has no further reading.</p>           </div>        <div id="map_footer" style="margin-top:-35px">                <button class="final_menu_button" id="overall_results_button">                    Final Election Results                </button>                <button class="final_menu_button" id="final_election_map_button">                    Election Map                </button>                <button class="final_menu_button" id="state_results_button">                    Results by State                </button>                <button class="final_menu_button" id="overall_details_button">                    Overall Results Details                </button> <button class="final_menu_button" id="recommended_reading_button" disabled="disabled"> Further Reading    </button>          <button class="final_menu_button" id="play_again_button">                    Play Again!                </button>            </div>';
         }
         else if(modded==true)//is modded and has further reading
         {
          var t = S(e.election_id),
          i = '        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area_reading">            <h3 class="results_tab_header">Further Reading</h3>        <p>Are you interested in exploring the ' + e.election_json[0].fields.year + ' election further?         This page contains some further reading to get you up to speed.</p>        <div id="recommended_reading_box">' + e.election_json[t].fields.recommended_reading + '</div>        </div>        <div id="map_footer" style="margin-top:-35px">                <button class="final_menu_button" id="overall_results_button">                    Final Election Results                </button>                <button class="final_menu_button" id="final_election_map_button">                    Election Map                </button>                <button class="final_menu_button" id="state_results_button">                    Results by State                </button>                <button class="final_menu_button" id="overall_details_button">                    Overall Results Details                </button> <button class="final_menu_button" id="recommended_reading_button" disabled="disabled"> Further Reading    </button>                                <button class="final_menu_button" id="play_again_button">                    Play Again!                </button>            </div>';
         }
         else//is base game
         {
          var t = S(e.election_id),
          i = '        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area_reading">            <h3 class="results_tab_header">Further Reading</h3>        <p>Are you interested in exploring the ' + e.election_json[t].fields.year + ' election further?         This page contains some further reading to get you up to speed.</p>        <div id="recommended_reading_box">' + e.election_json[t].fields.recommended_reading + '</div>        </div>        <div id="map_footer" style="margin-top:-35px">                <button class="final_menu_button" id="overall_results_button">                    Final Election Results                </button>                <button class="final_menu_button" id="final_election_map_button">                    Election Map                </button>                <button class="final_menu_button" id="state_results_button">                    Results by State                </button>                <button class="final_menu_button" id="overall_details_button">                    Overall Results Details                </button> <button class="final_menu_button" id="recommended_reading_button" disabled="disabled"> Further Reading    </button>                            <button class="final_menu_button" id="play_again_button">                    Play Again!                </button>            </div>';
         }

       
      


               $("#game_window").html(i), $("#overall_results_button").click(function() {
            p()
        }), $("#final_election_map_button").click(function() {
            h()
        }), $("#state_results_button").click(function() {
            g()
        }), $("#overall_details_button").click(function() {
            b()
        }), $("#play_again_button").click(function() {
            y()
        })
    }

    function y() {
        var t = S(e.election_id);
        $("#game_window").append('        <div class="overlay" id="new_game_overlay"></div>        <div class="overlay_window" id="new_game_window">            <div class="overlay_window_content" id="election_night_content">            <h3>Advisor Feedback</h3>            <img src="' + e.election_json[t].fields.advisor_url + '" width="208" height="128"/><p>            Are you sure you want to begin a new game?            </p></div>            <div class="overlay_buttons" id="new_game_buttons">            <button id="new_game_button">Yes</button><br>            <button id="cancel_button">No</button>            </div>        </div>'), $("#new_game_button").click(function() {
            window.location.href = window.location.href
        }), $("#cancel_button").click(function() {
            $("#new_game_overlay").remove(), $("#new_game_window").remove()
        })
    }

    function k(e) {
        for (var t = "", i = 0; i < e.length; i++) t += '<option value="' + e[i].state + '">' + e[i].name + "</option>";
        return t
    }

    function T(t) {
        for (var i = "        <h4>Results - This Game</h4>        <table>\t    <tr><th>Candidate</th><th>Popular Votes</th>\t    <th>Popular Vote %</th><th>Electoral Votes</th></tr>", a = 0; a < e.final_state_results.length; a++)
            if (e.final_state_results[a].state == t)
                for (var s = 0; s < e.final_state_results[a].result.length; s++) {
                    var n = E(e.final_state_results[a].result[s].candidate);
                    i += "                    <tr><td>" + (e.candidate_json[n].fields.first_name + " " + e.candidate_json[n].fields.last_name) + "</td><td>" + M(e.final_state_results[a].result[s].votes) + "</td><td>" + (100 * e.final_state_results[a].result[s].percent).toFixed(2) + "</td><td>" + e.final_state_results[a].result[s].electoral_votes + "</td></tr>"
                }
        return i += "</table>"
    }

    function A(t) {
        const i = [e.candidate_id, ...e.opponents_list];
        let r;

        const s = i.map((candidate) => {
          const n = e.player_answers.reduce((acc, answer) => {
            const score = e.answer_score_global_json.find(
              (item) =>
                item.fields.answer === answer &&
                item.fields.candidate === e.candidate_id &&
                item.fields.affected_candidate === candidate
            );
            if (score) {
              acc.push(score.fields.global_multiplier);
            }x
            return acc;
          }, []);
        
          const l = n.reduce((acc, score) => acc + score, 0);
          const o =
            candidate === e.candidate_id && l < -0.4
              ? 0.6
              : 1 + l;
          const c =
            candidate === e.candidate_id
              ? o * (1 + F() * e.global_parameter_json[0].fields.global_variance) * e.difficulty_level_multiplier
              : o * (1 + F() * e.global_parameter_json[0].fields.global_variance);
          const _ = isNaN(c) ? 1 : c;
        
          return {
            candidate,
            global_multiplier: _,
          };
        });

        
        const u = i.map((candidate) => {
            const v = e.candidate_issue_score_json
              .filter((item) => item.fields.candidate === candidate)
              .map((item) => ({
                issue: item.fields.issue,
                issue_score: item.fields.issue_score,
              }));
          
            return {
              candidate_id: candidate,
              issue_scores: removeIssueDuplicates(v),
            };
          });
          
        var f = [];
        for (a = 0; a < i.length; a++) {
            var m = [];
            for (r = 0; r < e.candidate_state_multiplier_json.length; r++)
                if (e.candidate_state_multiplier_json[r].fields.candidate == i[a]) {
                    var p = e.candidate_state_multiplier_json[r].fields.state_multiplier * s[a].global_multiplier * (1 + F() * e.global_parameter_json[0].fields.global_variance);
                    if (m.push({
                            state: e.candidate_state_multiplier_json[r].fields.state,
                            state_multiplier: p
                        }), m.length == e.states_json.length) break;
                    P(m, "state")
                }
            f.push({
                candidate_id: i[a],
                state_multipliers: m
            })
        }
        for (a = 0; a < u[0].issue_scores.length; a++) {
            var h = -1;
            for (r = 0; r < e.running_mate_issue_score_json.length; r++)
                if (e.running_mate_issue_score_json[r].fields.issue == u[0].issue_scores[a].issue) {
                    h = r;
                    break
                }
            var g = 0,
                b = 0;
            for (r = 0; r < e.player_answers.length; r++)
                for (d = 0; d < e.answer_score_issue_json.length; d++) e.answer_score_issue_json[d].fields.issue == u[0].issue_scores[a].issue && e.answer_score_issue_json[d].fields.answer == e.player_answers[r] && (g += e.answer_score_issue_json[d].fields.issue_score * e.answer_score_issue_json[d].fields.issue_importance, b += e.answer_score_issue_json[d].fields.issue_importance);
            u[0].issue_scores[a].issue_score = (u[0].issue_scores[a].issue_score * e.global_parameter_json[0].fields.candidate_issue_weight + e.running_mate_issue_score_json[h].fields.issue_score * e.global_parameter_json[0].fields.running_mate_issue_weight + g) / (e.global_parameter_json[0].fields.candidate_issue_weight + e.global_parameter_json[0].fields.running_mate_issue_weight + b)
        }
        for (a = 0; a < i.length; a++)
            for (r = 0; r < f[a].state_multipliers.length; r++) {
                var w = 0;
                for (d = 0; d < e.player_answers.length; d++)
                    for (var j = 0; j < e.answer_score_state_json.length; j++) e.answer_score_state_json[j].fields.state == f[a].state_multipliers[r].state && e.answer_score_state_json[j].fields.answer == e.player_answers[d] && e.answer_score_state_json[j].fields.candidate == e.candidate_id && e.answer_score_state_json[j].fields.affected_candidate == i[a] && (w += e.answer_score_state_json[j].fields.state_multiplier);
                if (0 == a) {
                    e.running_mate_state_id == f[a].state_multipliers[r].state && (w += .004 * f[a].state_multipliers[r].state_multiplier);
                    for (d = 0; d < e.player_visits.length; d++) e.player_visits[d] == f[a].state_multipliers[r].state && (w += .005 * Math.max(.1, f[a].state_multipliers[r].state_multiplier))
                }
                f[a].state_multipliers[r].state_multiplier += w
            }
        var y = [];
        for (a = 0; a < f[0].state_multipliers.length; a++) {
            var k = [];
            for (r = 0; r < i.length; r++) {
                var $ = 0;
                for (d = 0; d < u[r].issue_scores.length; d++) {
                    var T = 0,
                        A = 1;
                    for (j = 0; j < e.state_issue_score_json.length; j++) {
                        if (e.state_issue_score_json[j].fields.state == f[0].state_multipliers[a].state && e.state_issue_score_json[j].fields.issue == u[0].issue_scores[d].issue) {
                            T = e.state_issue_score_json[j].fields.state_issue_score, A = e.state_issue_score_json[j].fields.weight;
                            break
                        }
                    }
                    var S = u[r].issue_scores[d].issue_score * Math.abs(u[r].issue_scores[d].issue_score),
                        E = T * Math.abs(T);
                    $ += e.global_parameter_json[0].fields.vote_variable - Math.abs((S - E) * A)
                }
                for (d = 0; d < f[r].state_multipliers.length; d++)
                    if (f[r].state_multipliers[d].state == f[0].state_multipliers[a].state) var C = d;
                $ *= f[r].state_multipliers[C].state_multiplier, $ = Math.max($, 0), k.push({
                    candidate: i[r],
                    result: $
                })
            }
            y.push({
                state: f[0].state_multipliers[a].state,
                result: k
            })
        }
        for (a = 0; a < y.length; a++)
            for (r = 0; r < e.states_json.length; r++)
                if (y[a].state == e.states_json[r].pk) {
                    y[a].abbr = e.states_json[r].fields.abbr;
                    break
                }
        for (a = 0; a < y.length; a++) {
            var M = 0;
            for (r = 0; r < e.states_json.length; r++)
                if (e.states_json[r].pk == y[a].state) {
                    M = Math.floor(e.states_json[r].fields.popular_votes * (.95 + .1 * Math.random()));
                    break
                }
            var x = 0;
            for (r = 0; r < y[a].result.length; r++) x += y[a].result[r].result;
            for (r = 0; r < y[a].result.length; r++) {
                var N = y[a].result[r].result / x;
                y[a].result[r].percent = N, y[a].result[r].votes = Math.floor(N * M)
            }
        }
        for (a = 0; a < y.length; a++) {
            var I = R(y[a].state),
                O = 0;
            if (P(y[a].result, "percent"), y[a].result.reverse(), O = e.states_json[I].fields.electoral_votes, "1" == e.game_type_id)
                if (1 == e.states_json[I].fields.winner_take_all_flg)
                    for (r = 0; r < y[a].result.length; r++) y[a].result[r].electoral_votes = 0 == r ? O : 0;
                else {
                    O = e.states_json[I].fields.electoral_votes;
                    var H = 0;
                    for (r = 0; r < y[a].result.length; r++) H += y[a].result[r].votes;
                    var L = Math.ceil(y[a].result[0].votes / H * O * 1.25),
                        D = O - L;
                    for (r = 0; r < y[a].result.length; r++) y[a].result[r].electoral_votes = 0 == r ? L : 1 == r ? D : 0
                }
            if ("2" == e.game_type_id) {
                var V = [];
                for (r = 0; r < y[a].result.length; r++) V.push(y[a].result[r].percent);
                var q = divideElectoralVotesProp(V, O);
                for (r = 0; r < y[a].result.length; r++) y[a].result[r].electoral_votes = q[r]
            }
        }

        if (e.primary_states) {
            const primaryStates = JSON.parse(e.primary_states);
            // Create a new copy of the primary states array using Array.slice()
            const primM = primaryStates.slice().map(f => f.state);

            // Update the y array using the new copy of the primary states array
            for (let i = 0; i < y.length; i++) {
                if (primM.includes(y[i].state)) {
                    const indexOfed = primM.findIndex(state => state === y[i].state);
                    y[i].result = primaryStates[indexOfed].result;
                }
            }

        }

        if (1 == t) return y;
        if (2 == t) {
            for (a = 0; a < y.length; a++) {
                for (r = 0; r < y[a].result.length; r++) {
                    var G = 1 + F() * e.global_parameter_json[0].fields.global_variance;
                    y[a].result[r].result *= G
                }
                for (M = 0, r = 0; r < e.states_json.length; r++)
                    if (e.states_json[r].pk == y[a].state) {
                        M = Math.floor(e.states_json[r].fields.popular_votes * (.95 + .1 * Math.random()));
                        break
                    }
                for (x = 0, r = 0; r < y[a].result.length; r++) x += y[a].result[r].result;
                for (r = 0; r < y[a].result.length; r++) {
                    N = y[a].result[r].result / x;
                    y[a].result[r].percent = N, y[a].result[r].votes = Math.floor(N * M)
                }
            }

            return y
        }
    }

    function S(t) {
        for (var i = -1, a = 0; a < e.election_json.length; a++)
            if (e.election_json[a].pk == t) {
                i = a;
                break
            }
        return i
    }

    function E(t) {
        for (var i = -1, a = 0; a < e.candidate_json.length; a++)
            if (e.candidate_json[a].pk == t) {
                i = a;
                break
            }
        return i
    }

    function R(t) {
        for (var i = -1, a = 0; a < e.states_json.length; a++)
            if (e.states_json[a].pk == t) {
                i = a;
                break
            }
        return i
    }

    function C(t) {
        var i = S(t),
            a = '    <div class="overlay" id="feedback_overlay"></div>    <div class="overlay_window" id="feedback_window">        <div class="overlay_window_content" id="feedback_content">        <h3>Advisor Feedback</h3>        <img src="' + e.election_json[i].fields.advisor_url + '" width="208" height="128"/>        <p>Please select an answer before continuing!</p>        </div>        <div id="visit_buttons">        <button id="ok_button">OK</button><br>        </div>    </div>';
        $("#game_window").append(a), $("#ok_button").click(function() {
            $("#feedback_overlay").remove(), $("#feedback_window").remove()
        })
    }

    function F() {
        var e, t, i;
        do {
            i = (e = 2 * Math.random() - 1) * e + (t = 2 * Math.random() - 1) * t
        } while (i >= 1 || 0 == i);
        return e * Math.sqrt(-2 * Math.log(i) / i)
    }

    function P(e, t) {
        return e.sort(function(e, i) {
            var a = e[t],
                s = i[t];
            return a < s ? -1 : a > s ? 1 : 0
        })
    }

    function M(e) {
        var t = e.toString().split(".");
        return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.join(".")
    }

    vpSelect = (t) => {
        let candidate_id = document.getElementById("candidate_id")
        t.preventDefault(),
            function(t, a) {
                e.candidate_id = a
                for (var n = "", l = 0; l < e.running_mate_json.length; l++)
                    if (e.running_mate_json[l].fields.candidate == a) {
                        var o = e.running_mate_json[l].fields.running_mate,
                            _ = -1;
                        for (j = 0; j < e.candidate_json.length; j++)
                            if (o == e.candidate_json[j].pk) {
                                _ = j;
                                break
                            }
                        n += "<option value=" + e.candidate_json[_].pk + ">" + e.candidate_json[_].fields.first_name + " " + e.candidate_json[_].fields.last_name + "</option>"
                    }
                var r = '        <div class="game_header">        <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div class="inner_window_w_desc" id="inner_window_4">            <div id="running_mate_form">            <form name="running mate">            <p><h3>Please select your running mate:</h3>            <select name="running_mate_id" id="running_mate_id">' + n + '</select>            </p>            </form>            </div>            <div class="person_description_window" id="running_mate_description_window">            </div>        <p><button class="person_button" id="running_mate_id_back">Back</button> <button class="person_button" id="running_mate_id_button">Continue</button>        </p>        </div>';
                $("#game_window").html(r), $("#running_mate_id").ready(function() {
                        running_mate_gen()
                    }), $("#running_mate_id").change(function() {
                        running_mate_gen()
                    }), $("#running_mate_id_button").click(function(e) {
                        e.preventDefault(), s(campaignTrail_temp.election_id, a, running_mate_id.value)
                    }),
                    $("#running_mate_id_back").click(candSel)
            }(a, candidate_id ? candidate_id.value : e.candidate_id)
    }
    
    candSel = (a) => {
        a.preventDefault(),
            function(a) {
                for (var n = "", l = 0; l < e.candidate_json.length; l++) e.candidate_json[l].fields.election == a && 1 == e.candidate_json[l].fields.is_active && (n += "<option value=" + e.candidate_json[l].pk + ">" + e.candidate_json[l].fields.first_name + " " + e.candidate_json[l].fields.last_name + "</option>");
                var o = '<div class="game_header">        <h2>NEW CAMPAIGN TRAIL</h2>    </div>    <div class="inner_window_w_desc" id="inner_window_3">        <div id="candidate_form">        <form name="candidate">            <p>            <h3>Please select your candidate:</h3>            <select name="candidate_id" id="candidate_id">' + n + '</select>            </p>        </form>        </div>        <div class="person_description_window" id="candidate_description_window">        </div>        <p><button class="person_button" id="candidate_id_back">Back</button> <button class="person_button" id="candidate_id_button">Continue</button>        </p>    </div>';
                $("#game_window").html(o), $("#candidate_id").ready(function() {
                        t()
                    }), $("#candidate_id").change(function() {
                        t()
                    }), $("#candidate_id_button").click(vpSelect),
                    $("#candidate_id_back").click(previewStart)
            }(e.election_id ? e.election_id : election_id.value)
    }

    themeMenu = (a) => {
        a.preventDefault()
        let html = `
        <div class="game_header">
            <h2>NEW CAMPAIGN TRAIL</h2>
        </div>
        <div class="inner_window_front" style="position:relative;top: 20px;height:350px">
            <h3 style="font-size:300%"><em>Theme Editor</em></h3>
            <div id='election_edit_field' style='background-color:#e0e0e0;overflow-y:scroll;position:relative;width:600px;height:300px;margin: auto;border: solid 2px;'>

            <p><h3>Has Theme?:</h3> 
            <input type="checkbox" id="has_theme" checked="false"></p>

            <p><h3>Header Colour:</h3></p>
            <p><input id='header_colour' type="color"/></p>

            <p><h3>Window Colour:</h3></p>
            <p><input id='window_colour' type="color"/></p>

            <p><h3>Container Colour:</h3></p>
            <p><input id='contain_colour' type="color"/></p>

            <p><h3>Banner Image:</h3></p>
            <p><input id='banner_input' style='width:380px;' placeholder='MUST BE A URL (use a site like Imgur for uploading)'/></p>

            <p><h3>Background Image:</h3></p>
            <p><input id='background_input' style='width:380px;' placeholder='MUST BE A URL (use a site like Imgur for uploading)'/></p>

            <p><button id="display_theme" style="width:200px;height:33px;font-size:100%"><strong>Try Theme</strong></button></p>
        </div>
        <button id="back_button" style="width:200px;height:67px;font-size:140%; position:relative; top:27px; right:356px"><strong>Back</strong></button><br><br>
        `
        $("#game_window").html(html)

        $("#display_theme").click((a) => {
            a.preventDefault();
            nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = $("#header_colour")[0].value
            nct_stuff.themes[nct_stuff.selectedTheme].coloring_window =  $("#window_colour")[0].value
            document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title
            $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window
            $(".container")[0].style.backgroundColor =  $("#contain_colour")[0].value
            document.getElementById("header").src = $("#banner_input")[0].value
            document.body.background = $("#background_input")[0].value    
        })

        /*
        nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#3f1313"
        nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#8c4444"
        document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title
        $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window
        $(".container")[0].style.backgroundColor = "#140303"
        document.getElementById("header").src = "https://cdn.discordapp.com/attachments/810034515334004766/1082235914962612254/election_banner.png"
        document.body.background = "https://static.guim.co.uk/sys-images/Guardian/Pix/maps_and_graphs/2010/9/6/1283762406402/London-Blitz-007.jpg"
        */

        // LOAD EXISTING INFO
        if (mm.theme.title) {
            $("#has_theme")[0].checked = mm.theme.has_theme
            $("#header_colour")[0].value = mm.theme.title
            $("#window_colour")[0].value = mm.theme.window
            $("#contain_colour")[0].value = mm.theme.container
            $("#banner_input")[0].value = mm.theme.banner
            $("#background_input")[0].value = mm.theme.background
        } else {
            $("#has_theme")[0].checked = false
            $("#header_colour")[0].value = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title == "" ? "#700016" : nct_stuff.themes[nct_stuff.selectedTheme].coloring_title
            $("#window_colour")[0].value = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window
            $("#contain_colour")[0].value = nct_stuff.themes[nct_stuff.selectedTheme].coloring_container
            $("#banner_input")[0].value = nct_stuff.themes[nct_stuff.selectedTheme].banner
            $("#background_input")[0].value = nct_stuff.themes[nct_stuff.selectedTheme].background

        }

        $("#back_button").click((a) => { // SAVE ALL CURRENT INFO
            a.preventDefault();
            mm.theme.has_theme = $("#has_theme")[0].checked
            mm.theme.title = $("#header_colour")[0].value
            mm.theme.window = $("#window_colour")[0].value
            mm.theme.container = $("#contain_colour")[0].value
            mm.theme.banner = $("#banner_input")[0].value
            mm.theme.background = $("#background_input")[0].value
            codeOneMenu(a);
        })
        
    }

    miscEditMenu = (a) => {
        a.preventDefault()
        let html = `
        <div class="game_header">
            <h2>NEW CAMPAIGN TRAIL</h2>
        </div>
        <div class="inner_window_front" style="position:relative;top: 20px;height:350px">
            <h3 style="font-size:300%"><em>Misc. Editor</em></h3>
            <div id='election_edit_field' style='background-color:#e0e0e0;overflow-y:scroll;position:relative;width:600px;height:300px;margin: auto;border: solid 2px;'>

            <p><h3>Author Name:</h3></p>
            <p><input id='credit_input' style='width:380px;' placeholder='Credit yourself here!'/></p>

            <p><h3>Number of Questions:</h3></p>
            <input type="number" id="question_num_input" />

        </div>
        <button id="back_button" style="width:200px;height:67px;font-size:140%; position:relative; top:27px; right:356px"><strong>Back</strong></button><br><br>
        `
        $("#game_window").html(html)

        $("#question_num_input")[0].value = 25

        // LOAD EXISTING INFO
        if (mm.misc.credit) {
            $("#credit_input")[0].value = mm.misc.credit
            $("#question_num_input")[0].value = mm.misc.questions
        } 

        $("#back_button").click((a) => { // SAVE ALL CURRENT INFO
            a.preventDefault();
            let numQuestions = Number($("#question_num_input")[0].value)
            mm.misc.credit = $("#credit_input")[0].value
            mm.misc.questions = numQuestions > 0 ? numQuestions : 1
            codeOneMenu(a);
        })
        
    }

    electionEditMenu = (a) => {
        a.preventDefault()
        let html = `
        <div class="game_header">
            <h2>NEW CAMPAIGN TRAIL</h2>
        </div>
        <div class="inner_window_front" style="position:relative;top: 20px;height:350px">
            <h3 style="font-size:300%"><em>Election Editor</em></h3>
            <div id='election_edit_field' style='background-color:#e0e0e0;overflow-y:scroll;position:relative;width:600px;height:300px;margin: auto;border: solid 2px;'>

            <p><h3>Election Year:</h3></p>
            <p><input id='election_year_input' style='width:380px;' placeholder='Election year (ie. 1864, 2000N, etc.) goes here.'/></p>

            <p><h3>Election Image:</h3></p>
            <p><input id='election_img_input' style='width:380px;' placeholder='MUST BE A URL (use a site like Imgur for uploading)'/></p>
            <p><h4>Preview:</h4> <span id="ratioWarning" style="color:red;display:none">WARNING: Election image should be 100x53.</span></p>
            <img src='' id='election_img_preview' width="200"></img>

            <p><h3>Advisors Image:</h3></p>
            <p><input id='advisor_img_input' style='width:380px;' placeholder='MUST BE A URL (use a site like Imgur for uploading)'/></p>
            <p><h4>Preview:</h4> <span id="advisorRatioWarning" style="color:red;display:none">WARNING: Advisor image should be 208x128.</span></p>
            <img src='' id='advisor_img_preview' width="200"></img>

            <p><h3>Election Description:</h3></p>
            <p><textarea rows="5" cols="50" id="election_desc_input" placeholder='Input your election description here.'></textarea></p>
            <p><strong>Election description scrollable?:</strong> <input type="checkbox" id="scrollable_elec"></p>

            <p><h3>Has State Visits?:</h3> 
            <input type="checkbox" id="stateVisits" checked="true"></p>
            </div>
        </div>
        <button id="back_button" style="width:200px;height:67px;font-size:140%; position:relative; top:27px; right:356px"><strong>Back</strong></button><br><br>
        `
        $("#game_window").html(html)

        // LOAD EXISTING INFO
        if (mm.election.year) {
            $("#election_year_input")[0].value = mm.election.year
            $("#election_img_input")[0].value = mm.election.img
            $("#advisor_img_input")[0].value = mm.election.advisor_img
            $("#election_desc_input")[0].value = mm.election.description
            $("#scrollable_elec")[0].checked = mm.election.scrollable
            $("#stateVisits")[0].checked = mm.election.visits
        } else {
            $("#election_desc_input")[0].value = `<p>Here you concisely describe how the race for this office shapes up. If it fits neatly into the space, it is concise enough.</p><p><ul><li>You can use bullet points to go one by one,</li><li>or choose not to. Depends on how you wish to introduce the candidates.</li></p><p>Remember to format properly or something <i>will</i> go wrong. Happy modding!</p>`
        }

        $("#back_button").click((a) => { // SAVE ALL CURRENT INFO
            a.preventDefault();
            mm.election.year = $("#election_year_input")[0].value
            mm.election.img = $("#election_img_input")[0].value
            mm.election.advisor_img = $("#advisor_img_input")[0].value
            mm.election.description = $("#election_desc_input")[0].value
            mm.election.scrollable = $("#scrollable_elec")[0].checked
            mm.election.visits = $("#stateVisits")[0].checked
            codeOneMenu(a);
        })
        $("#election_img_input")[0].onchange = () => {
            $("#election_img_preview")[0].src = $("#election_img_input")[0].value
            $("#election_img_preview")[0].onload = () => {
                let img = $("#election_img_preview")[0]
                let ratio = ratioCheck(img, 100/53)
                if (ratio) {
                    $("#ratioWarning")[0].style.display = "" // IMAGE IS WRONG DIMENSIONS
                } else {
                    $("#ratioWarning")[0].style.display = "none"
                }
            }
        }
        $("#advisor_img_input")[0].onchange = () => {
            $("#advisor_img_preview")[0].src = $("#advisor_img_input")[0].value
            $("#advisor_img_preview")[0].onload = () => {
                let img = $("#advisor_img_preview")[0]
                let ratio = ratioCheck(img, 208/128)
                console.log()
                if (ratio) {
                    $("#advisorRatioWarning")[0].style.display = "" // IMAGE IS WRONG DIMENSIONS
                } else {
                    $("#advisorRatioWarning")[0].style.display = "none"
                }
            }
        }
        
    }

    checkCompleteness = () => {
        return mm.election.year && mm.misc.credit;
    }

    parseCode = () => {
        let final = "e = campaignTrail_temp;\n";
        
        // add theme

        /*
            $("#header_colour")[0].value = mm.theme.title
            $("#window_colour")[0].value = mm.theme.window
            $("#contain_colour")[0].value = mm.theme.container
            $("#banner_input")[0].value = mm.theme.banner
            $("#background_input")[0].value = mm.theme.background

        */

        if (mm.theme.has_theme) {
            let themeCode = `
            nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "` + mm.theme.title + `";\n
            nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "` + mm.theme.window + `";\n
            document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;\n
            $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;\n
            $(".container")[0].style.backgroundColor = "` + mm.theme.container + `";\n
            document.getElementById("header").src = "` + mm.theme.banner + `";\n
            document.body.background = "` + mm.theme.background + `";\n
            `
            final += themeCode
        }

        // add election info

        /*
            $("#election_year_input")[0].value = mm.election.year
            $("#election_img_input")[0].value = mm.election.img
            $("#advisor_img_input")[0].value = mm.election.advisor_img
            $("#election_desc_input")[0].value = mm.election.description
            $("#stateVisits")[0].checked = mm.election.visits
        */
       let year = e.election_json[e.election_json.map(f=>f.pk).indexOf(e.election_id)].fields.year
       let adjusted_description = mm.election.description.replaceAll("\n","<br>");
       // adjust if user wants scrollable election description
       if (mm.election.scrollable) {
        adjusted_description = "<div style='overflow-y:scroll;height:200px;'>"+adjusted_description+"</div>"
       }

       let election_json = [{
        "model": "campaign_trail.election",
        "pk": e.election_id,
        "fields": {
          "year": year,
          "summary": adjusted_description,
          "image_url": mm.election.img,
          "winning_electoral_vote_number": 270,
          "advisor_url": mm.election.advisor_img,
          "recommended_reading": "<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>",
          "has_visits": mm.election.visits ? 1 : 0,
          "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
        }
      }]
      let temp_election_list = [{
        "id": e.election_id,
        "year": year,
        "is_premium": 0,
        "display_year": mm.election.year
      }]
      final += "e.election_json = "+JSON.stringify(election_json)+";e.temp_election_list = "+JSON.stringify(temp_election_list) + ";"

      // add misc

      let global_param = [
        {
          "model": "campaign_trail.global_parameter",
          "pk": 1,
          "fields": {
            "vote_variable": 1.125,
            "max_swing": 0.12,
            "start_point": 0.94,
            "candidate_issue_weight": 10,
            "running_mate_issue_weight": 3,
            "issue_stance_1_max": -0.71,
            "issue_stance_2_max": -0.3,
            "issue_stance_3_max": -0.125,
            "issue_stance_4_max": 0.125,
            "issue_stance_5_max": 0.3,
            "issue_stance_6_max": 0.71,
            "global_variance": 0.01,
            "state_variance": 0.005,
            "question_count": mm.misc.questions,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
          }
        }
      ]
      final += `e.credits = "` + mm.misc.credit + `";`
      final += `e.global_parameter_json = ` + JSON.stringify(global_param) + ";"

      // CANDIDATES GRAAAH

      let n = 0;
      let cand_json = mm.candidates.map(f=>{
        n++
        return {
            "model": "campaign_trail.candidate",
            "pk": 1000+n,
            "fields": f
        }
      })
      n = 0;
      let running_mates = []
      for (let i in mm.candidates) {
        cand_json[i].fields.description = cand_json[i].fields.description.replaceAll("\n", "<br>")
        if (mm.candidates[i].scrollable) {
            cand_json[i].fields.description = "<div style='overflow-y:scroll;height:200px;'>"+cand_json[i].fields.description+"</div>"
        }
        if (mm.candidates[i].running_mate) {
            n++;
            running_mates.push({
                "model": "campaign_trail.running_mate",
                "pk": 2000+n,
                "fields": {
                  "candidate": cand_json[mm.candidates[i].partner].pk,
                  "running_mate": cand_json[i].pk
                }
              })
            cand_json[i].fields.description_as_running_mate = cand_json[i].fields.description
        }
      }
      final += "e.candidate_json = " + JSON.stringify(cand_json) + ";"
      final += "e.running_mate_json = " + JSON.stringify(running_mates) + ";"

      return final;
    }

    exitButton = () => {
        exitPreviewBtn = document.createElement("button")
        exitPreviewBtn.innerHTML = "<b>Leave Preview</b>"
        exitPreviewBtn.style = `
            position: fixed;
            left: 20px;
            bottom: 20px;
            width: 150px;
            height: 50px;
            font-size: 20px;
        `
        exitPreviewBtn.id = "exitPreviewBtn";
        exitPreviewBtn.addEventListener("click", (a) => {
            a.preventDefault()
            $("#exitPreviewBtn")[0].remove()
            codeOneMenu(a)
        })
        document.body.appendChild(exitPreviewBtn)
    }

    genCandTable = () => {
        let a = ""
        for (let i in mm.candidates) {
            let active = mm.candidates[i].is_active == 1 ? `checked="true"` : ""
            a += `
            <tr class="candidate" style="height:80px">
            <th style="padding:3px;width:60px"><img style='width:50px' src='`+mm.candidates[i].image_url+`'></img></th>
            <th style="padding:3px;width:200px">` + mm.candidates[i].first_name + ` ` + mm.candidates[i].last_name + `</th>
            <th style="padding:3px"><br><button class="editButton">Edit</button><br>
            <strong>Is playable?: </strong> <input type="checkbox" class="activeCand" `+active+`></p>
            <button class='removeButton' style="color:red;position:relative;bottom:0px;right:-120px;">Remove</button>
            </th>
            </tr>`
        }
        return a;
    }

    renderCandTable = () => {
        $("#candidatesTable").html(genCandTable());
        let remButtons = Array.from(document.getElementsByClassName("removeButton"))
        for (let i in remButtons) {
            remButtons[i].addEventListener("click", (a) => {
                let remButtons = Array.from(document.getElementsByClassName("removeButton"))
                a.preventDefault()
                let z = remButtons.indexOf(a.target);
                const confirmed = confirm("Are you sure you want to remove this candidate?");
                if (!confirmed) {
                    return;
                }
                mm.candidates[z] = null
                mm.candidates = mm.candidates.filter(f=>f) // remove removed candidate
                renderCandTable(); // re-render
            })
        }
        let actBoxes = Array.from(document.getElementsByClassName("activeCand"))
        for (i in actBoxes) {
            actBoxes[i].addEventListener("change", (a) => {
                a.preventDefault()
                let actBoxes = Array.from(document.getElementsByClassName("activeCand"))
                let z = actBoxes.indexOf(a.target);
                mm.candidates[z].is_active = 1
                renderCandTable(); // re-render
            })
        }
        let editButtons = Array.from(document.getElementsByClassName("editButton"));
        for (i in editButtons) {
            editButtons[i].addEventListener("click", individualCandidate)
        }
    }

    individualCandidate = (a) => {
        a.preventDefault()

        // get selected candidate
        let editButtons = Array.from(document.getElementsByClassName("editButton"));
        let z = editButtons.indexOf(a.target);

        mm.selectedCand = z

        // new menu 💀

        let html = `
        <div class="game_header">
            <h2>NEW CAMPAIGN TRAIL</h2>
        </div>
        <div class="inner_window_front" style="position:relative;top: 20px;height:350px">
            <h3 style="font-size:300%"><em>Individual Candidate Editor</em></h3>
            <div id='election_edit_field' style='background-color:#e0e0e0;overflow-y:scroll;position:relative;width:600px;height:300px;margin: auto;border: solid 2px;'>

            <p><h3>Candidate Name:</h3></p>
            <p><input id='candidate_first' style='width:190px;' placeholder='First'/><input id='candidate_last' style='width:190px;' placeholder='Last'/></p>

            <p><h3>Candidate Party:</h3></p>
            <p><input id='candidate_party' style='width:380px;' placeholder='Partisan affiliation - not needeed if the candidate isn't visible'/></p>

            <p><h3>Candidate Home State:</h3></p>
            <p><input id='candidate_home' style='width:380px;' placeholder='Home state - not needeed if the candidate isn't visible'/></p>

            <p><h3>Candidate Description:</h3></p>
            <p><textarea rows="5" cols="50" id="cand_desc_input" placeholder='Input your candidate description here.'></textarea></p>
            <p><strong>Candidate description scrollable?:</strong> <input type="checkbox" id="scrollable_cand"></p>

            <p><h3>Candidate Colour (on map):</h3></p>
            <p><input id='cand_colour' type="color"/></p>

            <p><h3>Candidate Image:</h3></p>
            <p><input id='cand_img_input' style='width:380px;' placeholder='MUST BE A URL (use a site like Imgur for uploading)'/></p>
            <p><h4>Preview:</h4> <span id="ratioWarning" style="color:red;display:none">WARNING: Candidate image should be 150x171.</span></p>
            <img src='' id='cand_img_preview' width="100"></img>

            <p><h3>Running Mate?</h3> 
            <input type="checkbox" id="isRunningMate"></p>

            <gg style="display:none" id="running_mate_to"><p><h3>Running Mate To:</h3> 
            <select id="runningMates"></select></p>
            </gg>
            </div>
        </div>
        <button id="back_button" style="width:200px;height:67px;font-size:140%; position:relative; top:27px; right:356px"><strong>Back</strong></button><br><br>
        `
        $("#game_window").html(html)

        // LOAD EXISTING INFO
        mm.candidates[z].running_mate = mm.candidates[z].running_mate ? mm.candidates[z].running_mate : false

        $("#candidate_first")[0].value = mm.candidates[z].first_name
        $("#candidate_last")[0].value = mm.candidates[z].last_name
        $("#candidate_party")[0].value = mm.candidates[z].party
        $("#candidate_home")[0].value = mm.candidates[z].state
        $("#cand_desc_input")[0].value = mm.candidates[z].description
        $("#scrollable_cand")[0].checked = mm.candidates[z].scrollable
        $("#cand_colour")[0].value = mm.candidates[z].color_hex        
        $("#cand_img_input")[0].value = mm.candidates[z].image_url
        $("#cand_img_preview")[0].src = mm.candidates[z].image_url
        $("#isRunningMate")[0].checked = mm.candidates[z].running_mate

        if (mm.candidates[z].running_mate) {
            $("#running_mate_to")[0].style.display = ""
            $("#runningMates")[0].innerHTML = ""
            for (let i in mm.candidates) {
                if (mm.candidates[z] != mm.candidates[i])
                $("#runningMates")[0].innerHTML += "<option value='"+i+"'>"+mm.candidates[i].first_name+" "+mm.candidates[i].last_name+"</option>"
            }
            $("#runningMates")[0].value = mm.candidates[z].partner
        }

        $("#back_button").click((a) => { // SAVE ALL CURRENT INFO
            a.preventDefault();
            mm.candidates[z].first_name = $("#candidate_first")[0].value
            mm.candidates[z].last_name = $("#candidate_last")[0].value
            mm.candidates[z].party = $("#candidate_party")[0].value
            mm.candidates[z].state = $("#candidate_home")[0].value
            mm.candidates[z].description = $("#cand_desc_input")[0].value
            mm.candidates[z].scrollable = $("#scrollable_cand")[0].checked
            mm.candidates[z].color_hex = $("#cand_colour")[0].value    
            mm.candidates[z].image_url = $("#cand_img_input")[0].value
            mm.candidates[z].running_mate = $("#isRunningMate")[0].checked

            if (mm.candidates[z].running_mate) {
                mm.candidates[z].partner = $("#runningMates")[0].value
            }
    
            candidateEditMenu(a);
        })
        $("#isRunningMate")[0].addEventListener("change", (a) => {
            a.preventDefault();
            if (!a.target.checked) {
                $("#running_mate_to")[0].style.display = "none"
                return;
            }
            $("#running_mate_to")[0].style.display = ""
            $("#runningMates")[0].innerHTML = ""
            for (let i in mm.candidates) {
                if (mm.candidates[z] != mm.candidates[i])
                $("#runningMates")[0].innerHTML += "<option value='"+i+"'>"+mm.candidates[i].first_name+" "+mm.candidates[i].last_name+"</option>"
            }
        })

        $("#cand_img_input")[0].onchange = () => {
            $("#cand_img_preview")[0].src = $("#cand_img_input")[0].value
            $("#cand_img_preview")[0].onload = () => {
                let img = $("#cand_img_preview")[0]
                let ratio = ratioCheck(img, 150/171)
                if (ratio) {
                    $("#ratioWarning")[0].style.display = "" // IMAGE IS WRONG DIMENSIONS
                } else {
                    $("#ratioWarning")[0].style.display = "none"
                }
            }
        }
    }
    
    candidateEditMenu = (a) => {
        a.preventDefault()
        let html = `
        <div class="game_header">
            <h2>NEW CAMPAIGN TRAIL</h2>
        </div>
        <div class="inner_window_front" style="position:relative;top: 20px;height:350px;">
            <h3 style="font-size:300%"><em>Candidate Editor</em></h3>
            <div id='election_edit_field' style='background-color:#e0e0e0;overflow-y:scroll;position:relative;width:700px;height:280px;margin: auto;border: solid 2px;'>

            <p><h3>Candidates:</h3></p>
            <table id='candidatesTable' style='background-color:#ededed;width:600px;margin:auto'>
            </table>
            </div>
        <button style="position:absolute;bottom:10px;left:10px;" id="add_candidate">Add Another Candidate</button>
        </div>
        <button id="back_button" style="width:200px;height:67px;font-size:140%; position:relative; top:27px; right:356px"><strong>Back</strong></button><br><br>
        `
        $("#game_window").html(html)
        renderCandTable()

        $("#add_candidate").click((a) => {
            a.preventDefault();
            mm.candidates.push({
                "first_name": "Dummy",
                "last_name": "Example",
                "election": e.election_id,
                "party": "Example Party",
                "state": "Hell",
                "priority": 1,
                "description": "Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!\n\nNew line\n\nThis is <b>bold</b> and this <i>italic</i>!",
                "color_hex": "#0000FF",
                "secondary_color_hex": null, // themes don't work on base TCT anyway, I see no reason not to let it break
                "is_active": 0,
                "image_url": "../static/images/barack-obama-2012.jpg", // obamna.... SODA!
                "electoral_victory_message": "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
                "electoral_loss_message": "<h3>Fake News?</h3>",
                "no_electoral_majority_message": "<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
                "description_as_running_mate": null,
                "candidate_score": 1
              })
              renderCandTable()
        })

        $("#back_button").click((a) => { // SAVE ALL CURRENT INFO???
            a.preventDefault();
            codeOneMenu(a);
        })
        
    }


    codeOneMenu = (a) => {
        a.preventDefault()
        let html = `
        <div class="game_header">
            <h2>NEW CAMPAIGN TRAIL</h2>
        </div>
        <div class="inner_window_front" style="position:relative;top: 20px;height:350px;">
            <h1 style="font-size:200%"><em>Code 1 Editor</em></h1>
            <button id="election_edit" style="width:200px;height:33px;font-size:100%"><strong>Edit Election</strong></button><br><br>
            <button id="cand_edit" style="width:200px;height:33px;font-size:100%"><strong>Edit Candidates</strong></button><br><br>
            <button id="theme_edit" style="width:200px;height:33px;font-size:100%"><strong>Edit Theme</strong></button><br><br>
            <button id="misc_edit" style="width:200px;height:33px;font-size:100%"><strong>Edit Misc.</strong></button><br><br>
            <button id="preview_button" style="width:200px;height:33px;font-size:100%;background-color:#85ada6;border: solid 2px;"><strong>Preview</strong></button><br><br>
            <button id="export_button" style="width:200px;height:33px;font-size:100%;background-color:#a5618b;border: solid 2px;"><strong>Export</strong></button><br><br>
            <br><br><br><br>
        </div>
        `
        $("#game_window").html(html)

        $("#election_edit").click(electionEditMenu)
        $("#cand_edit").click(candidateEditMenu)
        $("#theme_edit").click(themeMenu)
        $("#misc_edit").click(miscEditMenu)

        $("#preview_button").click((a) => {
            let complete = checkCompleteness()
            if (complete) {
                let parsed = parseCode()
                eval(parsed);
                exitButton()
                previewStart(a);
            } else {
                $("#preview_button")[0].innerHTML = "<strong>Complete editing first!</strong>"
                window.setTimeout(() => {
                    $("#preview_button")[0].innerHTML = "<strong>Preview</strong>"
                }, 1000)
            }
        })
        $("#export_button").click((a) => {
            let complete = checkCompleteness()
            if (!complete) {
                $("#export_button")[0].innerHTML = "<strong>Complete editing first!</strong>"
                window.setTimeout(() => {
                    $("#export_button")[0].innerHTML = "<strong>Export</strong>"
                }, 1000)
                return
            }
            let parsed = parseCode().trim()
            $("#export_button")[0].innerHTML = "<strong>Copying to clipboard!</strong>"
            window.setTimeout(() => {
                $("#export_button")[0].innerHTML = "<strong>Export</strong>"
            }, 1000)
            navigator.clipboard.writeText(parsed)
        })

        $("#preview_button")[0].onmouseenter = () => {
            let prev = $("#preview_button")[0]
            prev.style.backgroundColor = "#567c75"
        }
        $("#preview_button")[0].onmouseleave = () => {
            let prev = $("#preview_button")[0]
            prev.style.backgroundColor = "#85ada6"
        }
        $("#export_button")[0].onmouseenter = () => {
            let prev = $("#export_button")[0]
            prev.style.backgroundColor = "#753a5e"
        }
        $("#export_button")[0].onmouseleave = () => {
            let prev = $("#export_button")[0]
            prev.style.backgroundColor = "#a5618b"
        }

        
    }

    previewStart = (a) => {

        a.preventDefault(),
            function() {
                for (var a = "", n = 0; n < e.temp_election_list.length; n++) 0 == e.temp_election_list[n].is_premium ? a += "<option value=" + e.temp_election_list[n].id + ">" + e.temp_election_list[n].display_year + "</option>" : 1 == e.show_premium ? a += "<option value=" + e.temp_election_list[n].id + ">" + e.temp_election_list[n].display_year + "</option>" : a += "<option value=" + e.temp_election_list[n].id + " disabled>" + e.temp_election_list[n].display_year + "</option>";
                e.election_id = e.election_id ? e.election_id : e.election_json[0].pk
                let inX = S(e.election_id)
                var l = '<div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div class="inner_window_w_desc" id="inner_window_2">            <div id="election_year_form"><form name="election_year"><p><h3>Please select the election you will run in:</h3>    \t\t    <select name="election_id" id="election_id">' + a + '</select>            </p>            </form>            <div class="election_description_window" id="election_description_window">                <div id="election_image">                    <img src="' + e.election_json[inX].fields.image_url + '" width="300" height="160"/>                </div>                <div id="election_summary">' + e.election_json[inX].fields.summary + '</div>            </div>        </div>        <p><button id="election_id_button">Continue</button></p> <p id="credits">This scenario was made by ' + e.credits + '.</p>';
                $("#game_window").html(l)
                $("#election_id")[0].value=e.election_id
                $("#election_id").change(function() {
                    for (var t = -1, i = 0; i < e.election_json.length; i++)
                        if (e.election_json[i].pk == election_id.value) {
                            t = i;
                            e.election_id = e.election_json[i].pk
                            break
                        }
                    $("#election_description_window").html('<div id="election_image">            <img src="' + e.election_json[t].fields.image_url + '" width="300" height="160"/>            </div>            <div id="election_summary">' + e.election_json[t].fields.summary + "</div>")
                }), $("#election_id_button").click(candSel)
            }()
    }


    
    gameStart = (a) => {

        removeElection(21) // remove 2020 because I am 50% sure it will break as a base
        removeElection(69) // remove 1964 because it isn't a "true" base scenario

        a.preventDefault(),
            function() {
                for (var a = "", n = 0; n < e.temp_election_list.length; n++) 0 == e.temp_election_list[n].is_premium ? a += "<option value=" + e.temp_election_list[n].id + ">" + e.temp_election_list[n].display_year + "</option>" : 1 == e.show_premium ? a += "<option value=" + e.temp_election_list[n].id + ">" + e.temp_election_list[n].display_year + "</option>" : a += "<option value=" + e.temp_election_list[n].id + " disabled>" + e.temp_election_list[n].display_year + "</option>";
                e.election_id = e.election_id ? e.election_id : e.election_json[0].pk
                let inX = S(e.election_id)
                var l = '<div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div class="inner_window_w_desc" id="inner_window_2">            <div id="election_year_form">            <form name="election_year">            <p>                <h1>Select a base scenario.</h1>    \t\t    <select name="election_id" id="election_id">' + a + '</select>            </p>            </form>            <div class="election_description_window" id="election_description_window">                <div id="election_image">                    <img src="' + e.election_json[inX].fields.image_url + '" width="300" height="160"/>                </div>                <div id="election_summary">' + e.election_json[inX].fields.summary + '</div>            </div>        </div>        <p><button id="election_id_button">Continue</button></p> <p id="credits">This scenario was made by ' + e.credits + '.</p>';
                $("#game_window").html(l)
                $("#election_id")[0].value=e.election_id
                $("#election_id").change(function() {
                    for (var t = -1, i = 0; i < e.election_json.length; i++)
                        if (e.election_json[i].pk == election_id.value) {
                            t = i;
                            e.election_id = e.election_json[i].pk
                            break
                        }
                    $("#election_description_window").html('<div id="election_image">            <img src="' + e.election_json[t].fields.image_url + '" width="300" height="160"/>            </div>            <div id="election_summary">' + e.election_json[t].fields.summary + "</div>")
                }), $("#election_id_button").click(codeOneMenu)
            }()
    }

    removeElection = (num) => {
        num = e.election_json.map(f=>f.pk).indexOf(num)
        e.temp_election_list[num]=null
        e.temp_election_list = e.temp_election_list.filter(f=>f)
        e.election_json[num]=null
        e.election_json = e.election_json.filter(f=>f)
    }

    ratioCheck = (img, idealRatio) => {
        let dimensions = [img.width, img.height]
        const currentRatio = dimensions[0]/dimensions[1]
        let distance = Math.abs(idealRatio-currentRatio)
        if (distance > 0.05) {
            return true
        }

        return false
    }
    
    $("#game_start").click(gameStart), $("#skip_to_final").click(function(t) {
        e.final_state_results = A(1), electionNight()
    })
}();

// what did you expect?

setInterval(function() {
    if (sussyroth() && localStorage.getItem("cheated") != "true") {
        setTimeout(function() {
            location.reload();
        }, 1000)
    }
}, 100);

//you're just a dirty modder, aren't you?
//well, feel free to keep looking through at this, but it would be much cooler if you could actually find where this is in context.
//bonus points if you can tell me (decstar) what this is referencing
function nextPage() {
    document.getElementById("monologue").innerHTML = "<audio loop='true' autoplay='true' src='https://ia800103.us.archive.org/2/items/sansost/21%20Dogsong.mp3' style='display:none;'></audio>* it's been a while, huh?<br>* ...<br>* i'll be honest.<br>* i have no idea what happened for you to get here.<br>* this is actually some sort of error-handling message.<br>* so, if you're getting this ending...<br>* tell whoever made the mod, okay?<br>* they might fix it, or if it's a novel situation...<br>* they might even add another ending to the mod.<br>* chances are, though...<br><button onclick='nextPage2()'>Next Page</button>"
}

function nextPage2() {
    document.getElementById("monologue").innerHTML = "* you're just a dirty modder, aren't you?<br>* yeah, get outta here."
}

var dirtyhacker1, dirtyhacker2, dirtyhacker3
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 32) {
        if (document.getElementById("visit_overlay") != null && campaignTrail_temp.iamapoopybuttfaceandhavenolife != true && campaignTrail_temp.spacebarformods != true) {
            // you're just a dirty hacker, aren't you?
            campaignTrail_temp.multiple_endings = true;
            dirtyhacker1 = function() {
                document.getElementById("monologue").innerHTML = "heh heh heh... that's your fault isn't it?<br>you can't understand how this feels.<br><button onclick='dirtyhacker2()'>Next Page</button>"
            }
            dirtyhacker2 = function() {
                document.getElementById("monologue").innerHTML = "knowing that one day, without any warning... it's all going to be reset.<br>look. i gave up trying to stop hacking a long time ago.<br>and stopping the spacebar glitch doesn't really appeal anymore, either.<br><button onclick='dirtyhacker3()'>Next Page</button>"
            }
            dirtyhacker3 = function() {
                document.getElementById("monologue").innerHTML = "cause even if we do... we'll just end up right back here, without any memory of it, right?<br>to be blunt... it makes it kind of hard to give it my all.<br>... or is that just a poor excuse for being lazy...? hell if i know."
            }
            endingPicker = function() {
                if (localStorage.getItem("???") == null) {
                    localStorage.setItem("???", 0);
                } else {
                    localStorage.setItem("???", Number(localStorage.getItem("???") + 1));
                }
                if (Number(localStorage.getItem("???")) < 2) {
                    return "<audio loop='true' autoplay='true' src='https://ia800103.us.archive.org/2/items/sansost/15%20Sans..mp3' style='display:none;'></audio><font id='monologue' face='Comic Sans MS'>our reports showed a massive anomaly in the gamespace continuum.<br>global multipliers jumping left and right, stopping and starting...<br>until suddenly, everything ends.<br><button onclick='dirtyhacker1()'>Next Page</button></font>"
                } else {
                    secretsecretending = function() {
                        document.getElementById("monologue").innerHTML = "* type 'bigshot' into the main page, press enter, type 'bigshot' again, press enter. now go into a game and look at the bottom of the page."
                    }
                    return "<font id='monologue' face='Comic Sans MS'>* heya<br>* is anyone there...?<br>* you must be sick of hearing this, huh?<br>* what if i told you there was another way...<br><button onclick='secretsecretending()'>Next Page</button></font>"
                }
            }
        } else if (document.getElementById("visit_overlay") != null && campaign_trail.spacebarformods) {
            campaignTrail_temp.spacebarUsed = true;
        }
    }

});

fix1964= window.setInterval(function(){
    try{
    if (document.getElementById("election_id").value==69) {
        windowT = document.getElementById("inner_window_2")
        windowT.children[windowT.children.length-1].innerHTML= "This scenario was made by Tex."
    } else if (document.getElementById("election_id").value>-1 && !modded) {
        windowT.children[windowT.children.length-1].innerHTML= "This scenario was made by Dan Bryan."
    }
}catch{}
},100)
