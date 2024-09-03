const sortByDistance = require('sort-by-distance')
let opd = 2
let input =    [
    {
        "group_tag": "NONE",
        "status": "CREATED",
        "_id": "ckq53u3s5000fghbg7slx70j7",
        "username": "Logesh G",
        "mobile_number": "8015388545",
        "address": "East,1st St, Ma Po Si Nagar, Pallikaranai, Chennai, Tamil Nadu 600100, India",
        "location_name": "Pallikaranai",
        "lat": "12.951032",
        "lon": "80.200370",
        "slot": "6_30pm_7_30pm",
        "date": "2021-06-20",
        "total": 147,
        "driver": "NONE",
        "driver_charges": 20,
        "main_category": "breakfast",
        "orderdetails": [
            {
                "_id": "60cf25ecda97580251345b9f",
                "productId": "ckp3r4xim000b9obg870cdy6x",
                "amount": 120,
                "food_name": "Mini Combo",
                "food_description": "Breakfast Mini Combo",
                "food_qty": 1,
                "sub_category": "Regular"
            }
        ],
        "payment_mode": "Cash On Delivery",
        "km": "1.3",
        "cancelled_by": "Logesh G",
        "quadrant": "Q1",
        "order_id": "4",
        "priority": "NONE",
        "__v": 0
    },
    





    {
        "group_tag": "NONE",
        "status": "CREATED",
        "_id": "ckq53ray0000cghbgf1if7l3l",
        "username": "Logesh G",
        "mobile_number": "8015388545",
        "address": "East,1st St, Ma Po Si Nagar, Pallikaranai, Chennai, Tamil Nadu 600100, India",
        "location_name": "Pallikaranai",
        "lat": "12.950014",
        "lon": "80.199253",
        "slot": "6_30pm_7_30pm",
        "date": "2021-06-20",
        "total": 147,
        "driver": "NONE",
        "driver_charges": 20,
        "main_category": "breakfast",
        "orderdetails": [
            {
                "_id": "60cf256ada97580251345b9c",
                "productId": "ckp3r4xim000b9obg870cdy6x",
                "amount": 120,
                "food_name": "Mini Combo",
                "food_description": "Breakfast Mini Combo",
                "food_qty": 1,
                "sub_category": "Regular"
            }
        ],
        "payment_mode": "Cash On Delivery",
        "km": "1.3",
        "cancelled_by": "Logesh G",
        "quadrant": "Q1",
        "order_id": "1",
        "priority": "NONE",
        "__v": 0
    },
    {
        "group_tag": "NONE",
        "status": "CREATED",
        "_id": "ckq53skna000dghbgb3d8glj9",
        "username": "Logesh G",
        "mobile_number": "8015388545",
        "address": "East,1st St, Ma Po Si Nagar, Pallikaranai, Chennai, Tamil Nadu 600100, India",
        "location_name": "Pallikaranai",
        "lat": "12.953510",
        "lon": "80.201411",
        "slot": "6_30pm_7_30pm",
        "date": "2021-06-20",
        "total": 147,
        "driver": "NONE",
        "driver_charges": 20,
        "main_category": "breakfast",
        "orderdetails": [
            {
                "_id": "60cf25a5da97580251345b9d",
                "productId": "ckp3r4xim000b9obg870cdy6x",
                "amount": 120,
                "food_name": "Mini Combo",
                "food_description": "Breakfast Mini Combo",
                "food_qty": 1,
                "sub_category": "Regular"
            }
        ],
        "payment_mode": "Cash On Delivery",
        "km": "1.3",
        "cancelled_by": "Logesh G",
        "quadrant": "Q4",
        "order_id": "2",
        "priority": "NONE",
        "__v": 0
    },
    {
        "group_tag": "NONE",
        "status": "CREATED",
        "_id": "ckq53tety000eghbg6hdgd02l",
        "username": "Logesh G",
        "mobile_number": "8015388545",
        "address": "East,1st St, Ma Po Si Nagar, Pallikaranai, Chennai, Tamil Nadu 600100, India",
        "location_name": "Pallikaranai",
        "lat": "12.951618",
        "lon": "80.201883",
        "slot": "6_30pm_7_30pm",
        "date": "2021-06-20",
        "total": 147,
        "driver": "NONE",
        "driver_charges": 20,
        "main_category": "breakfast",
        "orderdetails": [
            {
                "_id": "60cf25ccda97580251345b9e",
                "productId": "ckp3r4xim000b9obg870cdy6x",
                "amount": 120,
                "food_name": "Mini Combo",
                "food_description": "Breakfast Mini Combo",
                "food_qty": 1,
                "sub_category": "Regular"
            }
        ],
        "payment_mode": "Cash On Delivery",
        "km": "1.3",
        "cancelled_by": "Logesh G",
        "quadrant": "Q4",
        "order_id": "3",
        "priority": "NONE",
        "__v": 0
    },
    {
        "group_tag": "NONE",
        "status": "CREATED",
        "_id": "ckq53u3s5000fghbg7slx70j7",
        "username": "Logesh G",
        "mobile_number": "8015388545",
        "address": "East,1st St, Ma Po Si Nagar, Pallikaranai, Chennai, Tamil Nadu 600100, India",
        "location_name": "Pallikaranai",
        "lat": "12.951032",
        "lon": "80.200370",
        "slot": "6_30pm_7_30pm",
        "date": "2021-06-20",
        "total": 147,
        "driver": "NONE",
        "driver_charges": 20,
        "main_category": "breakfast",
        "orderdetails": [
            {
                "_id": "60cf25ecda97580251345b9f",
                "productId": "ckp3r4xim000b9obg870cdy6x",
                "amount": 120,
                "food_name": "Mini Combo",
                "food_description": "Breakfast Mini Combo",
                "food_qty": 1,
                "sub_category": "Regular"
            }
        ],
        "payment_mode": "Cash On Delivery",
        "km": "1.3",
        "cancelled_by": "Logesh G",
        "quadrant": "Q4",
        "order_id": "4",
        "priority": 1,

        "__v": 0
    },
    

]


let Q1_6_30pm_7_30pm = []
let Q1_7_30pm_8_30pm = []
let Q1_8_30pm_9_30pm = []

let Q2_6_30pm_7_30pm = []
let Q2_7_30pm_8_30pm = []
let Q2_8_30pm_9_30pm = []

let Q3_6_30pm_7_30pm = []
let Q3_7_30pm_8_30pm = []
let Q3_8_30pm_9_30pm = []

let Q4_6_30pm_7_30pm = []
let Q4_7_30pm_8_30pm = []
let Q4_8_30pm_9_30pm = []



input.map((a1) => {

    if(a1.quadrant == "Q1" && a1.slot == "6_30pm_7_30pm")
    {
        Q1_6_30pm_7_30pm.push(a1)
    }

    else if(a1.quadrant == "Q1" && a1.slot == "7_30pm_8_30pm")
    {  
        Q1_7_30pm_8_30pm.push(a1)
    }
    else if(a1.quadrant == "Q1" && a1.slot == "8_30pm_9_30pm")
    {  
        Q1_8_30pm_9_30pm.push(a1)
    }

    else if(a1.quadrant == "Q2" && a1.slot == "6_30pm_7_30pm")
    {  
        Q2_6_30pm_7_30pm.push(a1)
    }
    else if(a1.quadrant == "Q2" && a1.slot == "7_30pm_8_30pm")
    {  
        Q2_7_30pm_8_30pm.push(a1)
    }
    else if(a1.quadrant == "Q2" && a1.slot == "8_30pm_9_30pm")
    {  
        Q2_8_30pm_9_30pm.push(a1)
    }   
    
    else if(a1.quadrant == "Q3" && a1.slot == "6_30pm_7_30pm")
    {  
        Q3_6_30pm_7_30pm.push(a1)
    }
    else if(a1.quadrant == "Q3" && a1.slot == "7_30pm_8_30pm")
    {  
        Q3_7_30pm_8_30pm.push(a1)
    }
    else if(a1.quadrant == "Q3" && a1.slot == "8_30pm_9_30pm")
    {  
        Q3_8_30pm_9_30pm.push(a1)
    } 

    else if(a1.quadrant == "Q4" && a1.slot == "6_30pm_7_30pm")
    {  
        Q4_6_30pm_7_30pm.push(a1)
    }
    else if(a1.quadrant == "Q4" && a1.slot == "7_30pm_8_30pm")
    {  
        Q4_7_30pm_8_30pm.push(a1)
    }
    else if(a1.quadrant == "Q4" && a1.slot == "8_30pm_9_30pm")
    {  
        Q4_8_30pm_9_30pm.push(a1)
    } 
  

})


function splitArrayIntoChunksOfLen(arr, len) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
  }

 
const opts = {
    yName: 'lat',
    xName: 'lon'
}
const origin = { lon: 80.199204, lat: 12.949974}
 
let new_Q1_6_30pm_7_30pm  = sortByDistance(origin, Q1_6_30pm_7_30pm, opts)
let new_Q1_7_30pm_8_30pm  = sortByDistance(origin, Q1_7_30pm_8_30pm, opts)
let new_Q1_8_30pm_9_30pm  = sortByDistance(origin, Q1_8_30pm_9_30pm, opts)
let new_Q2_6_30pm_7_30pm  = sortByDistance(origin, Q2_6_30pm_7_30pm, opts)
let new_Q2_7_30pm_8_30pm  = sortByDistance(origin, Q2_7_30pm_8_30pm, opts)
let new_Q2_8_30pm_9_30pm  = sortByDistance(origin, Q2_8_30pm_9_30pm, opts)
let new_Q3_6_30pm_7_30pm  = sortByDistance(origin, Q3_6_30pm_7_30pm, opts)
let new_Q3_7_30pm_8_30pm  = sortByDistance(origin, Q3_7_30pm_8_30pm, opts)
let new_Q3_8_30pm_9_30pm  = sortByDistance(origin, Q3_8_30pm_9_30pm, opts)
let new_Q4_6_30pm_7_30pm  = sortByDistance(origin, Q4_6_30pm_7_30pm, opts)
let new_Q4_7_30pm_8_30pm  = sortByDistance(origin, Q4_7_30pm_8_30pm, opts)
let new_Q4_8_30pm_9_30pm  = sortByDistance(origin, Q4_8_30pm_9_30pm, opts)


let neww_Q1_6_30pm_7_30pm  =splitArrayIntoChunksOfLen(new_Q1_6_30pm_7_30pm ,opd); 
let neww_Q1_7_30pm_8_30pm  =splitArrayIntoChunksOfLen(new_Q1_7_30pm_8_30pm ,opd); 
let neww_Q1_8_30pm_9_30pm  =splitArrayIntoChunksOfLen(new_Q1_8_30pm_9_30pm ,opd); 
let neww_Q2_6_30pm_7_30pm  =splitArrayIntoChunksOfLen(new_Q2_6_30pm_7_30pm ,opd); 
let neww_Q2_7_30pm_8_30pm  =splitArrayIntoChunksOfLen(new_Q2_7_30pm_8_30pm ,opd); 
let neww_Q2_8_30pm_9_30pm  =splitArrayIntoChunksOfLen(new_Q2_8_30pm_9_30pm ,opd); 
let neww_Q3_6_30pm_7_30pm  =splitArrayIntoChunksOfLen(new_Q3_6_30pm_7_30pm ,opd); 
let neww_Q3_7_30pm_8_30pm  =splitArrayIntoChunksOfLen(new_Q3_7_30pm_8_30pm ,opd); 
let neww_Q3_8_30pm_9_30pm  =splitArrayIntoChunksOfLen(new_Q3_8_30pm_9_30pm ,opd); 
let neww_Q4_6_30pm_7_30pm  =splitArrayIntoChunksOfLen(new_Q4_6_30pm_7_30pm ,opd); 
let neww_Q4_7_30pm_8_30pm  =splitArrayIntoChunksOfLen(new_Q4_7_30pm_8_30pm ,opd); 
let neww_Q4_8_30pm_9_30pm  =splitArrayIntoChunksOfLen(new_Q4_8_30pm_9_30pm ,opd); 




let newww_Q1_6_30pm_7_30pm = []
let newww_Q1_7_30pm_8_30pm = []
let newww_Q1_8_30pm_9_30pm =[]
let newww_Q2_6_30pm_7_30pm = []
let newww_Q2_7_30pm_8_30pm = []
let newww_Q2_8_30pm_9_30pm =[]
let newww_Q3_6_30pm_7_30pm = []
let newww_Q3_7_30pm_8_30pm = []
let newww_Q3_8_30pm_9_30pm =[]
let newww_Q4_6_30pm_7_30pm = []
let newww_Q4_7_30pm_8_30pm = []
let newww_Q4_8_30pm_9_30pm =[]




let i = 0
let j = 0
neww_Q1_6_30pm_7_30pm .map((a1) =>{
    i++
    if(i <= neww_Q1_6_30pm_7_30pm .length )
    {
        a1.map((a2)=>
        {
            j++
            a2.priority = j
            a2.group_tag = "Q1_6_30pm_7_30pm_G"+i
            a2.status = "INCOMING"
           
        })}
    else
    {}})
neww_Q1_6_30pm_7_30pm .map((a1)=>{
    a1.map((a2) =>
    {
        newww_Q1_6_30pm_7_30pm.push(a2) 
    })})

i = 0
j = 0
neww_Q1_7_30pm_8_30pm .map((a1) =>{
    i++
    if(i <= neww_Q1_7_30pm_8_30pm .length )
    {
        a1.map((a2)=>
        {
            j++
            a2.priority = j
            a2.group_tag = "Q1_7_30pm_8_30pm_G"+i
            a2.status = "INCOMING"
        })}
    else
    {}})
    neww_Q1_7_30pm_8_30pm .map((a1)=>{
    a1.map((a2) =>
    {
        newww_Q1_7_30pm_8_30pm.push(a2) 
    })})

i = 0
j = 0
neww_Q1_8_30pm_9_30pm .map((a1) =>{
    i++
    if(i <= neww_Q1_8_30pm_9_30pm .length )
    {
        a1.map((a2)=>
        {
            j++
            a2.priority = j
            a2.group_tag = "Q1_8_30pm_9_30pm_G"+i
            a2.status = "INCOMING"
        })}
    else
    {}})
    neww_Q1_8_30pm_9_30pm .map((a1)=>{
    a1.map((a2) =>
    {
        newww_Q1_8_30pm_9_30pm.push(a2) 
    })})





i = 0
j = 0
neww_Q2_6_30pm_7_30pm .map((a1) =>{
    i++
    if(i <= neww_Q2_6_30pm_7_30pm .length )
    {
        a1.map((a2)=>
        {
            j++
            a2.priority = j
            a2.group_tag = "Q2_6_30pm_7_30pm_G"+i
            a2.status = "INCOMING"
        })}
    else
    {}})
neww_Q2_6_30pm_7_30pm .map((a1)=>{
    a1.map((a2) =>
    {
        newww_Q2_6_30pm_7_30pm.push(a2) 
    })})

i = 0
j = 0
neww_Q2_7_30pm_8_30pm .map((a1) =>{
    i++
    if(i <= neww_Q2_7_30pm_8_30pm .length )
    {
        a1.map((a2)=>
        {
            j++
            a2.priority = j
            a2.group_tag = "Q2_7_30pm_8_30pm_G"+i
            a2.status = "INCOMING"
        })}
    else
    {}})
    neww_Q2_7_30pm_8_30pm .map((a1)=>{
    a1.map((a2) =>
    {
        newww_Q2_7_30pm_8_30pm.push(a2) 
    })})

i = 0
j = 0
neww_Q2_8_30pm_9_30pm .map((a1) =>{
    i++
    if(i <= neww_Q2_8_30pm_9_30pm .length )
    {
        a1.map((a2)=>
        {
            j++
            a2.priority = j
            a2.group_tag = "Q2_8_30pm_9_30pm_G"+i
            a2.status = "INCOMING"
        })}
    else
    {}})
    neww_Q2_8_30pm_9_30pm .map((a1)=>{
    a1.map((a2) =>
    {
        newww_Q2_8_30pm_9_30pm.push(a2) 
    })})


i = 0
j = 0
neww_Q3_6_30pm_7_30pm .map((a1) =>{
i++
if(i <= neww_Q3_6_30pm_7_30pm .length )
{
    a1.map((a2)=>
    {
        j++
        a2.priority = j
        a2.group_tag = "Q3_6_30pm_7_30pm_G"+i
        a2.status = "INCOMING"
    })}
else
{}})
neww_Q3_6_30pm_7_30pm .map((a1)=>{
a1.map((a2) =>
{
    newww_Q3_6_30pm_7_30pm.push(a2) 
})})

i = 0
j = 0
neww_Q3_7_30pm_8_30pm .map((a1) =>{
i++
if(i <= neww_Q3_7_30pm_8_30pm .length )
{
    a1.map((a2)=>
    {
        j++
        a2.priority = j
        a2.group_tag = "Q3_7_30pm_8_30pm_G"+i
        a2.status = "INCOMING"
    })}
else
{}})
neww_Q3_7_30pm_8_30pm .map((a1)=>{
a1.map((a2) =>
{
    newww_Q3_7_30pm_8_30pm.push(a2) 
})})

i = 0
j = 0
neww_Q3_8_30pm_9_30pm .map((a1) =>{
i++
if(i <= neww_Q3_8_30pm_9_30pm .length )
{
    a1.map((a2)=>
    {
        j++
        a2.priority = j
        a2.group_tag = "Q3_8_30pm_9_30pm_G"+i
        a2.status = "INCOMING"
    })}
else
{}})
neww_Q3_8_30pm_9_30pm .map((a1)=>{
a1.map((a2) =>
{
    newww_Q3_8_30pm_9_30pm.push(a2) 
})})

i = 0
j = 0
neww_Q4_6_30pm_7_30pm .map((a1) =>{
i++
if(i <= neww_Q4_6_30pm_7_30pm .length )
{
    a1.map((a2)=>
    {
        j++
        a2.priority = j
        a2.group_tag = "Q4_6_30pm_7_30pm_G"+i
        a2.status = "INCOMING"
    })}
else
{}})
neww_Q4_6_30pm_7_30pm .map((a1)=>{
a1.map((a2) =>
{
    newww_Q4_6_30pm_7_30pm.push(a2) 
})})

i = 0
j = 0
neww_Q4_7_30pm_8_30pm .map((a1) =>{
i++
if(i <= neww_Q4_7_30pm_8_30pm .length )
{
    a1.map((a2)=>
    {
        j++
        a2.priority = j
        a2.group_tag = "Q4_7_30pm_8_30pm_G"+i
        a2.status = "INCOMING"
    })}
else
{}})
neww_Q4_7_30pm_8_30pm .map((a1)=>{
a1.map((a2) =>
{
    newww_Q4_7_30pm_8_30pm.push(a2) 
})})

i = 0
j = 0
neww_Q4_8_30pm_9_30pm .map((a1) =>{
i++
if(i <= neww_Q4_8_30pm_9_30pm .length )
{
    a1.map((a2)=>
    {
        j++
        a2.priority = j
        a2.group_tag = "Q4_8_30pm_9_30pm_G"+i
        a2.status = "INCOMING"
    })}
else
{}})
neww_Q4_8_30pm_9_30pm .map((a1)=>{
a1.map((a2) =>
{
    newww_Q4_8_30pm_9_30pm.push(a2) 
})})


    







let output =[]

newww_Q1_6_30pm_7_30pm.map((a1)=>{
    output.push(a1)
})
newww_Q1_7_30pm_8_30pm.map((a1)=>{
    output.push(a1)
})
newww_Q1_8_30pm_9_30pm.map((a1)=>{
    output.push(a1)
})

newww_Q2_6_30pm_7_30pm.map((a1)=>{
    output.push(a1)
})
newww_Q2_7_30pm_8_30pm.map((a1)=>{
    output.push(a1)
})
newww_Q2_8_30pm_9_30pm.map((a1)=>{
    output.push(a1)
})

newww_Q3_6_30pm_7_30pm.map((a1)=>{
    output.push(a1)
})
newww_Q3_7_30pm_8_30pm.map((a1)=>{
    output.push(a1)
})
newww_Q3_8_30pm_9_30pm.map((a1)=>{
    output.push(a1)
})

newww_Q4_6_30pm_7_30pm.map((a1)=>{
    output.push(a1)
})
newww_Q4_7_30pm_8_30pm.map((a1)=>{
    output.push(a1)
})
newww_Q4_8_30pm_9_30pm.map((a1)=>{
    output.push(a1)
})



console.log(output,output.length)