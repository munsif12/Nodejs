async function fetchingApiData(limit) {

    const selector = document.getElementById('imgCont');
    await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
        .then(fetchData => {
            console.log(fetchData);
            return fetchData.json();
        }).then(jsData => {
            console.log(jsData);
            // console.log(jsData[0].url);
            jsData.map(val => {
                let key = val.id;
                let img = document.createElement("img");
                var p = document.createElement("p");
                p.classList.toggle(`myP-${val.id}`);
                img.classList.toggle(`mystyle-${val.id}`);


                console.log(img.className);
                let anchor = document.createElement("a");
                //hamy src ma random phots ka api use ke or id ham placeholder waly api saget krrhy
                //mtlab 2 api sath sath
                img.src = `https://picsum.photos/150/300?random=${val.id}`;
                anchor.href = `https://picsum.photos/id/${val.id}/info`;
                anchor.innerHTML = ` \Click on pic for details : ${val.id} `;
                anchor.style.cssText = "text-decoration:none;color:green;margin-left:-1px;cursor:hand;border-radius: 10px 22px;border: 1px solid lightgreen;text-align: center;padding-left: 14%;";
                selector.appendChild(img);
                selector.appendChild(anchor);
                selector.appendChild(p);


                let onclick = document.querySelector(`.mystyle-${val.id}`).addEventListener("click", function () {
                    //console.log(`done ${itrate.id}`);
                    fetch(`https://picsum.photos/id/${val.id}/info`).then(fetchedData => {
                        return fetchedData.json();
                    }).then(recData => {
                        console.log(recData);
                        return recData;
                    }).then(recData => {
                        p.style.display = "flex";
                        p.innerHTML = `Img id : ${recData.id} <br> Authhor name : ${recData.author} <br> Download Url : ${recData.download_url} `;
                        console.log(recData.author);
                    }).catch(err => {
                        console.log(err);
                    });
                });
                console.log(val.id + ' ' + val.url);
            });
            return jsData;
        }).then(Element => {
            // Element.map(itrate => {
            //     let onclick = document.querySelector(`.mystyle-${itrate.id}`).addEventListener("click", function () {
            //         //console.log(`done ${itrate.id}`);
            //         fetch(`https://picsum.photos/id/${itrate.id}/info`).then(fetchedData => {
            //             return fetchedData.json();
            //         }).then(recData => {
            //             console.log(recData);
            //             return recData;
            //         }).then(recData => {
            //             p = document.createElement("p");
            //             selector.appendChild(p);
            //             p.innerHTML = `Img id : ${recData.id} Authhor name : ${recData.author} Download Url :${recData.download_url} `;
            //             console.log(recData.author);
            //         })
            //             .catch(err => {
            //                 console.log(err);
            //             });
            //     });
            // });
        }).catch(err => {
            console.log(err);
        });
}
var photos = parseInt(prompt('Number of photos you want to Fetch.?50 '));
console.log(typeof (photos));
fetchingApiData(photos);