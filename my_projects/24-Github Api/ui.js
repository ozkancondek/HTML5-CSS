class UI {
  constructor() {
    this.profileDiv = document.getElementById("profile");

    this.repoDiv = document.getElementById("repos");

    this.lastUsers = document.getElementById("last-users");

    this.inputField = document.getElementById("githunname");

    this.cardBody = document.querySelector(".card-body");
  }
  clearInput() {
    this.inputField.value = "";
  }

  showUserInfo(userObj) {
    this.profileDiv = `<div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href=" ${userObj.html_url}" target = "_blank">
                         <img class="img-fluid mb-2" src= ${userObj.avatar_url}> </a>
                         <hr>
                         <div id="fullName"><strong>  ${userObj.name}</strong></div>
                         <hr>
                         <div id="bio"> ${userObj.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light"> ${userObj.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light"> ${userObj.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light"> ${userObj.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company"> ${userObj.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location"> ${userObj.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="company"> ${userObj.email}</span>
                                    
                                      
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div> `;
  }
  showError(message) {
    const div = document.createElement("div");
    div.className = "alert alert-danger";
    div.textContent = message;
    this.cardBody.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 2000);
  }
}
