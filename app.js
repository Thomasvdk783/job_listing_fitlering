console.log('connecté')

const data = async () => {
    const responseJSON = await fetch('./data.json')
    const responseJS = await responseJSON.json()
    const jobList = responseJS
    

    const showJobList = document.getElementById('container-job-list')

    jobList.forEach((job) => {

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
          <li class="li-key-words">Frontend</li>
          <li class="li-key-words">Senior</li>
          <li class="li-key-words">HTML</li>
          <li class="li-key-words">CSS</li>
          <li class="li-key-words">Javascript</li>
        </ul>
      </section>
        `
        const boxJob = document.querySelectorAll('.container-job-offer')
        boxJob.forEach((itemBox) => {
            if(job.featured === true){
                itemBox.classList.add('border-new-job')
            }
        })

            
        const containerBadges = document.querySelectorAll('.badges')
        containerBadges.forEach((item) => {
            if(job.new === true){
                const badgeNew = `<p class="">NEW!</p>`
                const badgeFeatured = `<p class="">FEATURED</p>`
                let arrBadges = []
                arrBadges.push(badgeNew, badgeFeatured)
                item.innerHTML = arrBadges
            }
        }) 
        
        showJobList.innerHTML += jobOffer
    })
}
data()