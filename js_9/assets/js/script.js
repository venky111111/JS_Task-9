
    function getting(status)
    {
      let headin=document.getElementById('headin');
      let msd=document.getElementById("msd");
      let avb=document.getElementById("avb");
      let upc=document.getElementById("upc");
      let s='';
      
            const cardsContainer = document.getElementById('cards-container');
           
            var jsondata = JSON.parse(studentData);
            
          

            let htmlContent = '';
            if(status==="Available"){
                s=`<button class="btn btn-success" type="button">
                <span class="spinner-grow spinner-grow-sm text-light" aria-hidden="true"></span>
                <span role="status">ShopNow</span>
                </button>`;
              avb.style.backgroundColor="#72c48c";
                headin.innerHTML='Available Items';
                msd.style.border="none";
                upc.style.border="none";
                upc.style.backgroundColor="white";
                msd.style.backgroundColor="white";
                
            }
            else if(status==="Upcoming"){
              
              s=`<button class="btn btn-warning" type="button">
              <span class="spinner-grow spinner-grow-sm text-light" aria-hidden="true"></span>
              <span role="status">Upcoming</span>
              </button>`;
              upc.style.backgroundColor="#83d7e6";
              upc.style.color="black";
              headin.innerHTML='Upcoming Items';
              msd.style.border="none";
              msd.style.backgroundColor="white";
              avb.style.backgroundColor="white";
              avb.style.border="none";
            }
            else if(status==="Missed"){
              s=`<button class="btn btn-danger" type="button">
                <span class="spinner-grow spinner-grow-sm text-light" aria-hidden="true"></span>
                <span role="status">Missed</span>
                </button>`;
              msd.style.backgroundColor="#e6858d";
              msd.style.color="black";
              upc.style.backgroundColor="white";
              upc.style.border="none";
              headin.innerHTML='Missed Items';
              avb.style.backgroundColor="white";
              avb.style.border="none";
              
            }
            jsondata.forEach(item => 
            {

                if(item.status===status){
                  let r = '';
                  let rate1 = document.getElementById('ratingId');
                  for (let i = 1; i <= 5; i++) {
                  
                    if (item.rating >= i) {
                      r += `<span class="fa fa-star checked"></span>`;    
                    }
                   
            
                     else {
                      r += `<span class="fa fa-star"></span>`;
                    }
                  }
                  function percentageCalculator(Itemprice,ItemDisscount){
                    let disscount=Itemprice*(ItemDisscount/100);
                    return Itemprice-disscount;
                  }
                
                    htmlContent += `
                    <div class="swiper-slide text-center" >
                    <div class="col p-1">
                        <div class="card">
                        <img src="${item.img}" class="card-img-top p-1">
                        <div class="card-body">
                            <h5 class="card-title">${item.brandName}</h5>
                            <p class="card-text fw-bold mb-0">RS.${percentageCalculator(item.price,item.diss)}<span class="text-decoration-line-through fw-bold ms-2">${item.price}</span><span class="text-success fw-bold ms-2">${item.diss}% off</span></p>
                            <div class="mb-2" id="ratingId">${r}</div>
                            ${s}
                        </div>
                        </div>
                    </div>
                    </div>
                    `;        
                }
                
            });
            cardsContainer.innerHTML = htmlContent;
           
            
    }
    
  