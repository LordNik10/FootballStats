var squadre = ['./img/premier/mcity.png','./img/premier/liverpool.png','./img/premier/chelsea.png','./img/premier/arsenal.png','./img/premier/aston.png','./img/premier/bren.png','./img/premier/brig.png',
'./img/premier/burn.png','./img/premier/cryst.png','./img/premier/eve.png','./img/premier/lee.png','./img/premier/lei.png','./img/premier/new.png','./img/premier/sout.png','./img/premier/tott.png','./img/premier/mutd.png','./img/premier/wat.png',
'./img/premier/west.png','./img/premier/wolv.png','./img/premier/norw.png'];
var s = ['manchester city','liverpool','chelsea','arsenal','aston villa','brentford','brighton','burnley','crystal palace','everton','leeds','leicester','newcastle','southampton','tottenham','manchester united','watford','west ham','wolves','norwich'];
var idteam;
var idleague;
var idseason;
var idseasonprec;
var count=0;

//Statistiche
function teamstats(idteam, idseason, idleague)
{
    console.log(idseason);
    if (count==0)
    {
        idseasonprec=idseason;
        count++;
    }
    var inf = document.getElementById('divtabinfo');
    var st = document.getElementById('divtabstats');
    if (inf != null)
    {
        inf.style.display='none';
        if (st !=null && idseasonprec==idseason)
        {
          st.style.display='block';  
          return;
        }
    }

    
    if (idseasonprec != idseason)
    {
        console.log('secondo if')
        st.remove();
        console.log(st);
    } 
    idseasonprec=idseason;
 
    fetch("https://api-football-beta.p.rapidapi.com/teams/statistics?team="+idteam+"&season="+idseason+"&league="+idleague, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
            "x-rapidapi-key": "e721c643cfmsh9f08ab542e903d9p11c9fajsnd6a322233825"
        }
    })
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        var body = document.getElementById('bdy');
        var divtabstats = document.createElement('div');
        divtabstats.id='divtabstats';

        var table1 = document.createElement('table');
        table1.id='tabstats';
    
        //Goal
        for (var i=0;i<3;i++)
        {
            var tr = document.createElement('tr');

            for (var j=0;j<4;j++)
            {
                var td = document.createElement('td');
                if (i==0 && j==1)
                {
                    td.textContent='Casa';
                }

                if (i==0 && j==2)
                {
                    td.textContent='Trasferta';
                }

                if (i==0 && j==3)
                {
                    td.textContent='Totale';
                }

                if (i==1 && j==0)
                {
                    td.textContent='Goal Fatti';
                }

                if (i==1 && j==1)
                {
                    td.textContent=data.response.goals.for.total.home;
                }

                if (i==1 && j==2)
                {
                    td.textContent=data.response.goals.for.total.away;
                }

                if (i==1 && j==3)
                {
                    td.textContent=data.response.goals.for.total.total;
                }

                if (i==2 && j==0)
                {
                    td.textContent='Goal subiti';
                }

                if (i==2 && j==1)
                {
                    td.textContent=data.response.goals.against.total.home;
                }

                if (i==2 && j==2)
                {
                    td.textContent=data.response.goals.against.total.away;
                }

                if (i==2 && j==3)
                {
                    td.textContent=data.response.goals.against.total.total;
                }
                td.id='tab'+i+''+j;
                tr.appendChild(td);
            }
            table1.appendChild(tr);
        }

        //Rigori
        var table2 = document.createElement('table');
        table2.id='tablestats2';

        for (var i=0;i<2;i++)
        {
            var tr = document.createElement('tr');
            for (var j=0;j<4;j++)
            {
                var td = document.createElement('td');
                if (i==0 && j==1)
                {
                    td.textContent='Realizzati';
                }

                if (i==0 && j==2)
                {
                    td.textContent='Sbagliati';
                }

                if(i==0 && j==3)
                {
                    td.textContent='Totali';
                }
                
                if(i==1 && j==0)
                {
                    td.textContent='Rigori concessi';
                }

                if (i==1 && j==1)
                {
                    td.textContent=data.response.penalty.scored.total;
                }

                if (i==1 && j==2)
                {
                    td.textContent=data.response.penalty.missed.total;
                }

                if(i==1 && j==3)
                {
                    td.textContent=data.response.penalty.total;
                }
                td.id='tab'+i+''+j;
                tr.appendChild(td);
            }
            table2.appendChild(tr);

        }

        var table3 = document.createElement('table');
        table3.id='tabstats3';
    
        //Vittorie sconfitte ecc
        for (var i=0;i<4;i++)
        {
            var tr = document.createElement('tr');

            for (var j=0;j<4;j++)
            {
                var td = document.createElement('td');
                if (i==0 && j==1)
                {
                    td.textContent='Casa';
                }

                if (i==0 && j==2)
                {
                    td.textContent='Trasferta';
                }

                if (i==0 && j==3)
                {
                    td.textContent='Totale';
                }

                if (i==1 && j==0)
                {
                    td.textContent='Vittorie';
                }

                if (i==1 && j==1)
                {
                    td.textContent=data.response.fixtures.wins.home;
                }

                if (i==1 && j==2)
                {
                    td.textContent=data.response.fixtures.wins.away;
                }

                if (i==1 && j==3)
                {
                    td.textContent=data.response.fixtures.wins.total;
                }

                if (i==2 && j==0)
                {
                    td.textContent='Sconfitte';
                }

                if (i==2 && j==1)
                {
                    td.textContent=data.response.fixtures.loses.home;
                }

                if (i==2 && j==2)
                {
                    td.textContent=data.response.fixtures.loses.away;
                }

                if (i==2 && j==3)
                {
                    td.textContent=data.response.fixtures.loses.total;
                }
                
                if (i==3 && j==0)
                {
                    td.textContent='Pareggi';
                }

                if (i==3 && j==1)
                {
                    td.textContent=data.response.fixtures.draws.home;
                }

                if (i==3 && j==2)
                {
                    td.textContent=data.response.fixtures.draws.away;
                }

                if (i==3 && j==3)
                {
                    td.textContent=data.response.fixtures.draws.total;
                }
                td.id='tab'+i+''+j;
                tr.appendChild(td);
            }
            table3.appendChild(tr);
        }
        
        divtabstats.appendChild(table3);
        divtabstats.appendChild(table1);
        divtabstats.appendChild(table2);
        body.appendChild(divtabstats);
    })
    .catch(err => {
        console.error(err);
    });
}

//Informazioni
function teaminfo(nameteam)
{
    var inf = document.getElementById('divtabinfo');
    var st = document.getElementById('divtabstats');
    if (st != null)
    {
        st.style.display='none';
        inf.style.display='block';
        return;
    }
    var body = document.getElementById('bdy');
    fetch("https://api-football-beta.p.rapidapi.com/teams?name="+nameteam, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
                    "x-rapidapi-key": "e721c643cfmsh9f08ab542e903d9p11c9fajsnd6a322233825"
                }
            })
                .then(response => response.json())
                .then (data=>{
                    console.log(data);
                    idteam = data.response[0].team.id;
                    idleague=39;
                    var divtab = document.createElement('div');
                    divtab.id='divtabinfo';
                    //var lb1 = document.createElement('label');
                    //lb1.textContent=data.response[0].team.founded;
                    //divtab.appendChild(lb1);
                    var table = document.createElement('table');
                    table.id='tab';
                    for (var i=0;i<7;i++)
                    {
                        var tr = document.createElement('tr');
                        for (var j=0;j<2;j++)
                        {
                            var td = document.createElement('td');
                            if (i==0 && j==0)
                            {
                                td.textContent='Nome';
                            }

                            if (i==0 && j==1)
                            {
                                td.textContent=nameteam;
                            }

                            if (i==1 && j==0)
                            {
                                td.textContent='Nazione';
                            }

                            if(i==1 && j==1)
                            {
                                td.textContent=data.response[0].team.country;
                            }

                            if (i==2 && j==0)
                            {
                                td.textContent='Fondazione';
                            }

                            if (i==2 && j==1)
                            {
                                td.textContent=data.response[0].team.founded;
                            }

                            if (i==3 && j==0)
                            {
                                td.textContent='Città';
                            }

                            if (i==3 && j==1)
                            {
                                td.textContent=data.response[0].venue.city;
                            }

                            if (i==4 && j==0)
                            {
                                td.textContent='Stadio';
                            }

                            if (i==4 && j==1)
                            {
                                td.textContent=data.response[0].venue.name;
                            }

                            if (i==5 && j==0)
                            {
                                td.textContent='Capacità';
                            }

                            if (i==5 && j==1)
                            {
                                td.textContent=data.response[0].venue.capacity;
                            }

                            if (i==6 && j==0)
                            {
                                td.textContent='Indirizzo';
                            }

                            if (i==6 && j==1)
                            {
                                td.textContent=data.response[0].venue.address;
                            }

                            tr.appendChild(td);
                        }
                        table.appendChild(tr);
                    }
                    divtab.appendChild(table);
                    body.appendChild(divtab);
                })
                .catch(err => {
                    console.error(err);
                });
}





document.addEventListener("DOMContentLoaded", function () {
    s.sort();
    squadre.sort();
    var body = document.getElementById('bdy');

    var divtit = document.createElement('div');
    divtit.id='title';

    var lbselsquadra = document.createElement('h1');
    lbselsquadra.textContent='Seleziona una squadra:';
    divtit.appendChild(lbselsquadra);
    body.appendChild(divtit);

    var div2 = document.createElement('div');
    div2.id = 'second';
    for (i = 0; i < squadre.length; i++) {
        let sqd = document.createElement('img');
        sqd.src = squadre[i];
        sqd.className = 'squadre';
        sqd.id = s[i];
        sqd.addEventListener('click', function () {
            divtit.style.display='none';

            var div2 = document.getElementById('second');
            div2.style.display = 'none';

            var div1 = document.createElement('div');
            div1.id = 'mainsqd';

            var divback = document.createElement('div');
            divback.id='divback';

            var lbback = document.createElement('label');
            lbback.id = 'lbback';
            lbback.textContent = 'Indietro';
            lbback.addEventListener('click', function () {
                window.location.reload();
            });

            var imgback = document.createElement('img');
            imgback.src="./img/freccia.png";
            imgback.id='imgback';
            imgback.addEventListener('click',function(){
                window.location.reload();
            })
            divback.appendChild(imgback);
            divback.appendChild(lbback);

            div1.appendChild(divback);

            var div = document.createElement('div');
            div.id = 'sqddiv'

            div1.appendChild(div);

            var img = document.createElement('img');
            img.id = 'imgteam';
            img.src = sqd.src;

            div.appendChild(img);

            var lb = document.createElement('label');
            lb.id = 'sqdtitolo';
            lb.textContent = sqd.id;

            div.appendChild(lb);

            var divintestazione = document.createElement('div');
            divintestazione.id = 'sqdintestazione';

            var divinfo = document.createElement('div');
            var divstats = document.createElement('div');
            var divstagione = document.createElement('div');
            divinfo.className = 'secondint';
            divstats.className = 'secondint';
            divstagione.className = 'secondint';

            var lbinfo = document.createElement('label');
            lbinfo.id = 'sqdinfo';
            lbinfo.className = 'sqdtitint';
            lbinfo.textContent = 'Informazioni';
            lbinfo.addEventListener('click', function () {
                document.getElementById('divtabstats').style.display = 'none';
                teaminfo(sqd.id);
            })
            divinfo.appendChild(lbinfo);

            var lbstats = document.createElement('label');
            lbstats.id = 'sqdstats';
            lbstats.className = 'sqdtitint';
            lbstats.textContent = 'Statistiche';
            lbstats.addEventListener('click', function () {
                document.getElementById('divtabinfo').style.display = 'none';
                idseason = document.getElementById('menuseason').value;
                teamstats(idteam, idseason, idleague);
            });
            divstats.appendChild(lbstats);

            var lbstagione = document.createElement('label');
            var menu = document.createElement('select');
            menu.id = 'menuseason';
            var op1 = document.createElement('option');
            var op2 = document.createElement('option');
            var op3 = document.createElement('option');
            op1.textContent = '2021';
            op2.textContent = '2020';
            op3.textContent = '2019';
            menu.appendChild(op1);
            menu.appendChild(op2);
            menu.appendChild(op3);
            menu.addEventListener('change', function () {
                console.log('onchange');
                idseason = document.getElementById('menuseason').value;
                teamstats(idteam, idseason, idleague);
            })
            lbstagione.id = 'sqdstagione';
            lbstagione.className = 'sqdtitint';
            lbstagione.textContent = 'Stagione';
            divstagione.appendChild(lbstagione);

            divintestazione.appendChild(divinfo);
            divintestazione.appendChild(divstats);
            divstagione.appendChild(menu);
            divintestazione.appendChild(divstagione);

            body.appendChild(div1);
            body.appendChild(divintestazione);

            var hr = document.createElement('hr');

            body.appendChild(hr);
            teaminfo(sqd.id);
        })
        div2.appendChild(sqd);
    }
    document.getElementById('bdy').appendChild(div2);
});

