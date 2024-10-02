<template>
    <div id="app-work-container">
      <h2>JOBS</h2>
      <div id="work-container">
        <div class="work-card-right">
          <div>
            <h3>Catering Service</h3>
            <p>
              I did the redesign of a catering service website, 
              focusing on creating a more engaging and intuitive user experience through a sleek, 
              responsive design that highlights the client’s offerings. 
            </p>
            <span>not online yet</span>            
          </div>
          <img 
            class="fade-up" 
            :src="cateringProjectImg" 
            alt="catering-project"
            @click="openModal(cateringProjectImg)" 
          />
        </div>  
        <hr>
        <div class="work-card-right">
          <div>
            <h3>Boolivery Project</h3>
            <p>
              I led the front-end design of my final project, 
              focusing on crafting a sleek and responsive interface that enhances user engagement 
              while delivering an intuitive experience tailored to the project’s objectives.
            </p>
            <span>local project</span>            
          </div>
          <img 
            class="fade-up" 
            :src="booliveryProjectImg" 
            alt="boolivery-project"
            @click="openModal(booliveryProjectImg)" 
          />
        </div> 
      </div>
  
      <!-- Vuetify Modal -->
        <v-dialog v-model="dialog" max-width="90vw">
            <v-card style="border-radius: 24px; padding: 1rem;">
                <v-btn 
                icon 
                @click="dialog = false" 
                class="close-btn"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                    <div style="display: flex; justify-content: center; align-items: center; height: 90vh;">
                        <v-img :src="selectedImage" max-height="90vh" max-width="90vw" contain />
                    </div>
            </v-card>
        </v-dialog>


    </div>
  </template>
  

  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Importa le immagini
  import cateringProjectImg from '../assets/catering-project.png';
  import booliveryProjectImg from '../assets/boolivery-project.png';
  
  const dialog = ref(false);
  const selectedImage = ref('');
  
  function openModal(image) {
    selectedImage.value = image;
    dialog.value = true;
  }
  
  onMounted(() => {
    const images = document.querySelectorAll('.fade-up');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
    images.forEach(image => {
      observer.observe(image);
    });
  });
  </script>
  

<style lang="scss" scoped>
#app-work-container {
    margin-top: 4rem;
    padding-bottom: 4rem;
    border-bottom: 3px solid black;

    @media (max-width: 1024px) {
        padding-bottom: 2rem;
    }

    @media (max-width: 600px) {
        margin-top: 2rem;
    }

    h2 {
        font-size: 32px;
        margin-bottom: 2rem;

        @media (max-width: 1024px) {
            margin-bottom: 0;
        }

        @media (max-width: 492px) {
            font-size: 26px;
        }
    }

    #work-container {
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 600px) {
            padding: 0 1rem;
        }

        hr {
            width: 80%;
            height: 3px;
            background-color: rgb(175, 175, 175);
            border: none;
        }

        .work-card-right {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border: 3px solid rgb(175, 175, 175);
            padding: 4rem;
            margin: 4rem 0;
            height: 600px;
            border-top: none;
            border-bottom: none;

            @media (max-width: 600px) {
                margin: 2rem 0;
                padding: 2rem 2rem;
            }

            div {
                width: 30%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;

                h3 {
                    font-size: 32px;

                    @media (max-width: 1024px) {
                        margin-bottom: 2rem;
                    }

                    @media (max-width: 510px) {
                        font-size: 24px;
                        margin-bottom: 1rem;
                    }

                    @media (max-width: 375px) {
                        font-size: 20px;
                    }
                }

                p {
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 2;

                    @media (max-width: 510px) {
                        font-size: 16px;
                    }

                    @media (max-width: 375px) {
                        font-size: 14px;
                    }
                }

                span {
                    font-size: 18px;
                    color: green;
                    text-decoration: underline;
                    text-underline-offset: 5px;
                    @media (max-width: 510px) {
                        font-size: 14px;
                    }
                }
            }

            img {
                width: 100%;
                max-width: 40vw;
                transition: opacity 1s ease, transform 1s ease;
                opacity: 0;
                transform: translateY(20px);
                cursor: pointer;

                &.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }

        @media (max-width: 1024px) {
            .work-card-right {
                flex-direction: column;
                align-items: center;
                height: auto;

                div {
                    width: 100%;
                    text-align: center;
                }

                img {
                    max-width: 100%;
                    margin-top: 2rem;
                }
            }
        }
    }
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
}
</style>
