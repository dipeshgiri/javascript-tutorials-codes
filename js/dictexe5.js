const obj = `[

    {

        "word": "help",

        "defination": "make it easier or possible for (someone) to do something by offering them one's services or resources."

    },



    {

        "word": "thank",

        "defination": "express gratitude to (someone), especially by saying ‘Thank you’."

    },



    {

        "word": "sky",

        "defination": "the region of the atmosphere and outer space seen from the earth"

    },



    {

        "word": "mountaine",

        "defination": "a large natural elevation of the earth's surface rising abruptly from the surrounding level; a large steep hill."

    },



    {

        "word": "see",

        "defination": "perceive with the eyes; discern visually."

    }

]`;

let btn=document.getElementById('submit');
btn.addEventListener('click',getmeaning);
let str="";
function getmeaning()
{
    let data=document.getElementById('word').value;
  
    const myjson=JSON.parse(obj);
    for (let key in myjson)
    {
        if(myjson[key].word==data)
        {
            str=`<table class="table mx-5 mt-5">
            <tr>
            <th>
            Word
            </th>
            <th>
            Meaning
            </th>
            </tr>
            <tr>
            <td>${data}</td>
            <td>${myjson[key].defination}</td>
            </tr>
            </table>`
            document.getElementById('words').innerHTML=str;
        }
    }
}

