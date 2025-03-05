let oneWayData = [];

async function fetchOneWayData() {
    try {
        const response = await fetch('https://onlinetaxi-sgl4-je33.onrender.com/findcar');
        oneWayData = await response.json();
        console.log('One-way data fetched:', oneWayData);

        compareRoutes();  // Call compare function after fetching the data
    } catch (error) {
        console.error('Error fetching one-way data:', error);
    }
}

// Route to be compared
const RouteShow = [
    {
        From: "Shimla, Himachal Pradesh, India",
        To: "Chandigarh, India",
        Routename:"Shimla to Chandigarh",
        page:"Shimla-to-Chd.html"
    },
    {
        From: "Jammu",
        To: "Chandigarh, India",
        Routename:"Jammu to Chandigarh"
    } ,
    {
        From: "Chandigarh, India",
        To: "Jibhi, Himachal Pradesh, India",
        Routename:"Chandigarh to Jibhi",
        page:"chd-to-jibhi.html"

    }, 
    {
        From: "Chandigarh, India",
        To: "Delhi Airport (DEL), New Delhi, Delhi, India",
        Routename:"Chandigarh to New Delhi",
        page:"Chd-to-NewDelhi.html"
    }, 
    {
        From: "Chandigarh, India",
        To: "Vrindavan, Uttar Pradesh, India",
        Routename:"Chandigarh to Varindavan",
        page:"Chd-to-varindavan.html"
    }, 
    {
        From: "Chandigarh, India",
        To: "Tirthan Valley, Gushaini, Himachal Pradesh, India",
        Routename:"Chandigarh to Tirthan Valley"
    }, 
    {
        From: "Chandigarh, India",
        To: "Gurugram, Haryana, India",
        Routename:"Chandigarh to Gurugram"
    }, 
    {
        From: "Chandigarh, India",
        To: "Dharamshala, Himachal Pradesh, India",
        Routename:"Chandigar to Dharamshala"
    }, 
    {
        From: "Chandigarh, India",
        To: "Haridwar, Uttarakhand, India",
        Routename:"Chandigarh to Haridwar"
    }, 
    {
        From: "Chandigarh, India",
        To: "Dehradun, Uttarakhand, India",
        Routename:"Chandigarh to Dehradun"
    },
    {
        From:"Chandigarh, India",
        To:"Khatu Shyam Ji Temple, Rajasthan, India",
        Routename:"Chandigarh to Khatu Shyam",
        page:"Chd-to-Salasar,Balaji,Kathusham.html"
    }



  

    
    

    // Dehradun, Uttarakhand, India
];

// Compare function to find matching routes

function compareRoutes() {
    const Card = document.getElementById('Toptour');
    RouteShow.forEach(route => {
        oneWayData.forEach(data => {
            if (data.From === route.From && data.To === route.To) {
                if (data.Car == "Sedan/Maruti Dzire"){

                    console.log('Matching route found:', data);

                Card.innerHTML += `
                   
                <div onclick="Abcd('${route.Routename}','${route.page}','${data.Price}')" class="text-center bg-light p-0 card border-0 m-2 rounded"
                style="width:320px; background-color: hsla(161, 73%, 83%, 0.263);position: relative;" > 
            
                
                <div class="card-body">
                    <h5 class="fw-bold text-center">${route.Routename}</h5>
                  <p>With Online Taxi</p>
                    <h5 class="text-center">Fare Start <br> <span class="fa fa-rupee"> ${data.Price}/-   &nbsp; &nbsp;</span><s
                    class="fa fa-rupee text-danger">${data.Price+500}/-</s></h5>
                </div>
              
            </div>
            
            `;
        }

                
            }
        });
    });
}

fetchOneWayData();
{/* <img src="./Images/sidhu_travels-removebg-preview.png" alt="" width="100px" height="30px" style="position: absolute; top:10px; left:20px;background-color:white;border-radius:15px;padding:4px"> */}


{/* <img src="https://raw.githubusercontent.com/manpreet94560/project/refs/heads/main/Image/${data.Image}" alt="" height="150px" width="100%" class="shadow rounded cardm"></img> */}


function Abcd(route, path,price) {
    const params = new URLSearchParams({
        route: route,
        Price:price
        // path: path,
        // discountPrice: discountPrice,
        // mainPrice: mainPrice
    }).toString();
    window.location.href = `./${path}?${params}`;
}
