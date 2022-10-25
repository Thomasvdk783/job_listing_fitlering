console.log('connecté')

const data = async () => {
    const responseJSON = await fetch('./data.json')
    const responseJS = await responseJSON.json()
    const jobList = responseJS
    

    const showJobList = document.getElementById('container-job-list')
    

    jobList.forEach((job) => {

        let arrLanguages = []
        let arrTools = []

        const languages = job.languages
        languages.forEach((itemLanguages) => { 
            const showItemLanguages = `<li class="li-key-words">${itemLanguages}</li>`
            arrLanguages.push(showItemLanguages)
        })


        const tools = job.tools
        tools.forEach((itemTools) => {
            const showItemLanguages = `<li class="li-key-words">${itemTools}</li>`
            arrTools.push(showItemLanguages)
        })

        const jobOffer = `
        <section class="container-job-offer" id="${job.id}" >
        <div class="right-part-job">
          <figure>
            <img src="${job.logo}" alt="company logo photosnap">
          </figure>
          <div class="infos-job">
            <div class="container-company">
              <h3 class="title-job">
                ${job.company}
              </h3>
              <div class="badges" id="container-badges">

              </div>
            </div>
            <div class="container-job">
              <h2>${job.position}</h2>
              <ul class="ul-infos-job">
                <li class="li-infos-job">${job.postedAt}</li>
                <li class="li-infos-job">${job.contract}</li>
                <li class="li-infos-job">${job.location}</li>
              </ul>
            </div>
          </div>
        </div>
  
        <ul class="left-part-job">
            <li class="li-key-words">${job.role}</li>
            <li class="li-key-words">${job.level}</li>
            ${arrLanguages}
            ${arrTools}
        </ul>
      </section>
        `

        showJobList.innerHTML += jobOffer


        const boxJob = document.querySelectorAll('.container-job-offer')
        boxJob.forEach((itemBox) => {
            if(job.featured === true){
                itemBox.classList.add('border-new-job')
            }
        })

            
        const containerBadges = document.querySelectorAll('.badges')
        let arrBadgesNew = []
        containerBadges.forEach((item) => {
            if(job.new === true ){
                const badgeNew = `<p class="badge-new">NEW!</p>`
                arrBadgesNew.push(badgeNew)
                item.innerHTML = arrBadgesNew
            }  
        }) 
        let arrBadgesFeatured = []
        containerBadges.forEach((item) => {
            if(job.featured === true){
                const badgeFeatured = `<p class="badge-featured">FEATURED</p>`
                arrBadgesFeatured.push(badgeFeatured)
                item.innerHTML = arrBadgesFeatured
            }
        })
    })

    // filter search 
    const ulKeysWords = document.querySelector('left-part-job')
    let arrKeyWordsFilter = []

    // filter box
    const filterBox = document.getElementById('ul-filter-top')
    console.log(filterBox)

    const clearBtn = document.getElementById('clear-btn')
    const containerFilter = document.getElementById('container-filter')
    const liKeyWords = document.querySelectorAll('.li-key-words')
    const liKeyWordsFilter = document.querySelectorAll('.li-key-words-filter-section')

    liKeyWordsFilter.forEach((key) => {
        key.addEventListener('click', () => {
            key.style.display = 'none'
        })
    })

    clearBtn.addEventListener('click', () =>{
        containerFilter.style.display = 'none'
    })
}
data()

