<template>
  <div id="app">
    <div class="container">
      <div class="sticky-top">
        <h1 align="center">" ຮ້ານຂາຍເຄື່ອງອອນໄລນ MK " </h1>
        <div class="input-group">
          <input type="text" placeholder="search">
        </div>
        <h5>ກາລຸນາເລືອກສິນຄ້າທີ່ທ່ານຕ້ອງການ.!</h5>
      </div>

      <!-- //showslide -->
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://media.esquirescoffee.co.uk/uploads/2021/09/20120618/mike-kenneally-tNALoIZhqVM-unsplash.jpg"
              class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img
              src="https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/intro-1645231221.jpg"
              class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://www.shutterstock.com/shutterstock/videos/1026970784/thumb/4.jpg?ip=x480"
              class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <hr>
      <!-- //showslide -->
      <div class="menu">
        <div class="row">
          <div class="col-md-4" v-for="item in products" :key="item.id">
            <div class="card-h-100">
              <div class="container-cart">
                <img :src="item.image" class="card-img-top">
              </div>
              <div class="card-body">
                <h6 class="card-title">{{ item.name }}</h6>
                <p class="card-text">price {{ item.price }} ₭</p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary" @click="addCart(item)">ເພີ່ມ</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="sticky-top"> 
            <h2>
              ກະຕ່າສິນຄ້າຂອງທ່ານ
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                <path
                  d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
              </svg>
            </h2>
            <hr>
            <transition name="fade">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ພາບ</th>
                  <th scope="col">ຊື່ສິນຄ້າ</th>
                  <th scope="col">ລາຄາ</th>
                  <th scope="col">ຈຳນວນ</th>
                  <th scope="col">ທັງໝົດ</th>
                  <th scope="col">ລົບ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in carts" :key="product.id">
                  <td>
                    <img :src= "product.image" alt="" width="80px" height="100px">
                  </td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.price }}</td>
                  <td>
                    <i @click="minusQty(product)">−</i>
                    {{ product.qty }}
                    <i @click="plusQty(product)">+</i> <!-- class="fa fa-plus qty-plus" -->
                  </td>
                  <td>{{ product.total }}</td>
                  <td>
                    <button @click="removeProduct(product)" class="btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </transition>
            <h3>ລວມລາຄາ ທັງໝົດ {{ total() }} ₭</h3>
            <div class="forest">
              <button type="button" class="btn btn-success">Success</button>
            </div>
          </div>
        </div>
      </div>

      <div class="container-text">
        <ul>
          <h5>
            ສະບາຍດີ.!! ລູກຄ້າທີ່ໜ້າຮັກທຸກທ່ານ ທ່ານສາມາດເລືອກຊື້ສິນຄ້າໄດ້ທຸກຢ່າງໃນຮ້ານຂອງພວກເຮົາ.
            <br>
            ໂດຍທ່ານສາມາດຕິດຕໍ່ພວກເຮົາໄດ້ທຸກໆຊ່ອງດັ່ງລຸ່ມນີ້,ຕະຫຼອດ24ຊົ່ວໂມງ
            <br>
            ຂໍຂອບໃຈ.!! ລູກຄ້າທີ່ຮັກແພງ.
          </h5>
          <ul>
            <ul><a href="https://www.facebook.com/energy.forest.9"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                  height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
                  </path>
                </svg>
                Facebook</a></ul>

            <ul><a href="https://web.whatsapp.com/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z">
                  </path>
                </svg>
                Whatapp</a></ul>

            <ul><a href="02077474716"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-telephone-forward" viewBox="0 0 16 16">
                  <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z">
                  </path>
                </svg>
                Phonecall : 020277474616</a></ul>

            <ul><a href="https://mail.google.com/mail/u/0/?tab=rm#inbox"><svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" class="bi bi-envelope-heart" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l3.235 1.94a2.76 2.76 0 0 0-.233 1.027L1 5.384v5.721l3.453-2.124c.146.277.329.556.55.835l-3.97 2.443A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741l-3.968-2.442c.22-.28.403-.56.55-.836L15 11.105V5.383l-3.002 1.801a2.76 2.76 0 0 0-.233-1.026L15 4.217V4a1 1 0 0 0-1-1H2Zm6 2.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z">
                  </path>
                </svg>
                Email</a></ul>

            <ul><a
                href="https://www.google.com/maps/dir/%E0%BA%A1%E0%BA%B0%E0%BA%AB%E0%BA%B2%E0%BA%A7%E0%BA%B4%E0%BA%97%E0%BA%B0%E0%BA%8D%E0%BA%B2%E0%BB%84%E0%BA%A5%E0%BA%AA%E0%BA%B8%E0%BA%9E%E0%BA%B2%E0%BA%99%E0%BA%B8%E0%BA%A7%E0%BA%BB%E0%BA%87,+W5CP%2BPQQ,+%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BA%AB%E0%BA%BC%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87//@19.9219171,102.1519587,13z/data=!4m8!4m7!1m5!1m1!1s0x312ed63d67736b31:0x7c260ec78a32d98b!2m2!1d102.1869784!2d19.9218398!1m0"><svg
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map"
                  viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z">
                  </path>
                  <path fill-rule="evenodd"
                    d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z">
                  </path>
                </svg>
                Location: Laungphabang</a></ul>
          </ul>
        </ul>
      </div>


      <div class="container mt-5">
        <hr>
        <h3>Our Tool For Developed</h3>
        <div class="row">
          <div class="col-sm-4">
            <h5>NODE.JS</h5>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLl3luWAQfvV0zSJ3X0ma_T4WlPHTMVvXqAKZNt5g&s">
            </div>
            <li>web develop</li>
            <li>node.js to make easy for web dev</li>
          </div>
          <div class="col-sm-4">
            <h5>VUE.JS</h5>
            <div>
              <img
                src="data:image/png;base64,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">
            </div>
            <li>Embedding as Web Components on any page.</li>
            <li>Single-Page Application (SPA)</li>
            <li>Fullstack / Server-Side Rendering (SSR)</li>
          </div>
          <div class="col-sm-4">
            <h5>PYTHON</h5>
            <div>
              <img
                src="data:image/png;base64,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">
            </div>
            <li>Data analysis and machine learning.</li>
            <li>Web development.</li>
          </div>
          <div class="col-sm-4">
            <h5>CSS,HTML</h5>
            <div>
              <img
                src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png">
            </div>
            <li>CSS stands for Cascading Style Sheets</li>
            <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
          </div>
          <div class="col-sm-4">
            <h5>JAVASCRIPT</h5>
            <div>
              <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png">
            </div>
            <li>JavaScript is the world's most popular programming language.</li>
          </div>
          <div class="col-sm-4">
            <h5>SQL</h5>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcH73IgM2pFMorvYR_tJOBxmq0FmQf5coWQxpHigZnjGfjCy4eybE0Ic8ROfMOBh3chU&usqp=CAU">
            </div>
            <li>Database</li>
          </div>
        </div>
      </div>

    </div>
    <hr>
    <p>&copy; 2023 By VASENG CHUOYEE</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      message: "",
      carts: [],
      coffee: 0,
      tea: 0,
      orange: 0,
      coffees1: 0,
      coffees2: 0,
      coffees3: 0,
      coffees4: 0,
      coffees5: 0,
      coffees6: 0,
      coffees7: 0,
      coffees8: 0,
      coffees9: 0,

      products: [
        {
          id: 1,
          name: "coffee",
          price: 30000,
          image: "https://cdn.pixabay.com/photo/2013/07/13/09/51/drink-156144__340.png",
          active: false,
        },
        {
          id: 2,
          name: "green coffee",
          price: 40000,
          image: "https://cdn.pixabay.com/photo/2016/08/10/15/10/green-tea-1583546__340.jpg",
          active: false,
        },
        {
          id: 3,
          name: "orangejuie",
          price: 25000,
          image: "https://media.istockphoto.com/id/152971676/photo/glass-of-orange-juice-and-fresh-oranges.jpg?b=1&s=170667a&w=0&k=20&c=683otTsEcPbv7ME8LGGDA2VlrF2J80rrtQ0ISWOsAqY=",
          active: false,
        },
        {
          id: 4,
          name: "coconut",
          price: 20000,
          image: "https://media.istockphoto.com/id/503893920/photo/coconut-milk-drink.jpg?s=612x612&w=0&k=20&c=WiJXi5W6tanQ6awnKRtJ22ZsSIgUtgHCuS_bXzeCJ_g=",
          active: false,
        },
        {
          id: 5,
          name: "Watermelon",
          price: 45000,
          image: "https://media.istockphoto.com/id/1451140794/photo/watermelon-smoothie-in-a-jar-with-mint-and-lemon.jpg?s=1024x1024&w=is&k=20&c=zP0lBu1TlUmx7a6VLCOK88wRBl4WpW-BK9cHZdx6IkI=",
          active: false,
        },
        {
          id: 6,
          name: "lemon",
          price: 35000,
          image: "https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_960_720.jpg",
          active: false,
        },
        {
          id: 7,
          name: "lemon glass",
          price: 30000,
          image: "https://cdn.pixabay.com/photo/2018/04/17/11/03/cocktail-3327242__340.jpg",
          active: false,
        },
        {
          id: 8,
          name: "pineapp",
          price: 50000,
          image: "https://media.istockphoto.com/id/176851361/photo/pineapple-juice.jpg?s=1024x1024&w=is&k=20&c=KgYRU5VuhImRVT611Eze_dodbNrmbv9W6lnQlNY2GVo=",
          active: false,
        },
        {
          id: 9,
          name: "banana",
          price: 45000,
          image: "https://media.istockphoto.com/id/932148590/photo/banana-milk-smoothie-on-white-background.jpg?s=1024x1024&w=is&k=20&c=bQHfXqF9vb3Eip3bQ-jUjA1Ok5L5X2OqwxuQKHcIgO8=",
          active: false,
        },
        {
          id: 10,
          name: "mango",
          price: 38000,
          image: "https://cdn.pixabay.com/photo/2015/08/13/19/56/smoothie-887417_960_720.jpg",
          active: false,
        },
        {
          id: 11,
          name: "water",
          price: 10000,
          image: "https://cdn.pixabay.com/photo/2017/10/21/16/07/glass-2875091__340.jpg",
          active: false,
        },
        {
          id: 12,
          name: "coconut",
          price: 20000,
          image: "https://media.istockphoto.com/id/503893920/photo/coconut-milk-drink.jpg?s=612x612&w=0&k=20&c=WiJXi5W6tanQ6awnKRtJ22ZsSIgUtgHCuS_bXzeCJ_g=",
          active: false,
        },
      

      ]
    }
  },
  methods: {
    addCart: function (item) {      
      if (item.id == 1) {
        //bye coffee
        this.coffee += 1;
        if (this.coffee <= 1) {
          //one time in one
          this.pushData(item)
        } else {
          //bye the same
          var found = this.findIndex(item);
          this.carts[found].qty += 1;
          this.carts[found].total = this.carts[found].qty * this.carts[found].price;
        }
      }
      if (item.id == 2) {
        //bye others
        this.tea += 1;
        if (this.tea <= 1) {
          //one time in one
          this.pushData(item)
        } else {
          //bye the same
          var founds = this.findIndex(item);
          this.carts[founds].qty += 1;
          this.carts[founds].total = this.carts[founds].qty * this.carts[founds].price;
        }
      }
      if (item.id == 3) {
        //bye others
        this.orange += 1;
        if (this.orange <= 1) {
          //one time in one
          this.pushData(item)
        } else {
          //bye the same
          var founds1 = this.findIndex(item);
          this.carts[founds1].qty += 1;
          this.carts[founds1].total = this.carts[founds1].qty * this.carts[founds1].price;
        }
      }
      if (item.id == 4) {
        //bye others
        this.coffees1 += 1;
        if (this.coffees1 <= 1) {
          //one time in one
          this.pushData(item)
        } else {
          //bye the same
          var founds2 = this.findIndex(item);
          this.carts[founds2].qty += 1;
          this.carts[founds2].total = this.carts[founds2].qty * this.carts[founds2].price;
        }
      }
      if (item.id == 5) {
        //bye others
        this.coffees2 += 1;
        if (this.coffees2 <= 1) {
          //one time in one
          this.pushData(item)
        } else {
          //bye the same
          var founds3 = this.findIndex(item);
          this.carts[founds3].qty += 1;
          this.carts[founds3].total = this.carts[founds3].qty * this.carts[founds3].price;
        }
      }
      if (item.id == 6) {
        //bye others
        this.coffees3 += 1;
        if (this.coffees3 <= 1) {
          //one time in one
          this.pushData(item)
        } else {
          //bye the same
          var founds4 = this.findIndex(item);
          this.carts[founds4].qty += 1;
          this.carts[founds4].total = this.carts[founds4].qty * this.carts[founds4].price;
        }
      }
      if (item.id == 7) {
        //bye others
        this.coffees4 += 1;
        if (this.coffees4 <= 1) {
          //one time in one
          this.pushData(item)
        } else {
          //bye the same
          var founds5 = this.findIndex(item);
          this.carts[founds5].qty += 1;
          this.carts[founds5].total = this.carts[founds5].qty * this.carts[founds5].price;
        }
      }
      if (item.id == 8) {
        //bye others
        this.coffees5 += 1;
        if (this.coffees5 <= 1) {
          //one time in one
          this.pushData(item)
        } else {
          //bye the same
          var founds6 = this.findIndex(item);
          this.carts[founds6].qty += 1;
          this.carts[founds6].total = this.carts[founds6].qty * this.carts[founds6].price;
        }
      }
      if (item.id == 9) {
        //bye others
        this.coffees6 += 1;
        if (this.coffees6 <= 1) {
          //one time in one
          this.pushData(item)
        } else {
          //bye the same
          var founds7 = this.findIndex(item);
          this.carts[founds7].qty += 1;
          this.carts[founds7].total = this.carts[founds7].qty * this.carts[founds7].price;
        }
      }
      if (item.id == 10) {
        //bye others
        this.coffees7 += 1;
        if (this.coffees7 <= 1) {
          //one time in one
          this.pushData(item)
        } else {
          //bye the same
          var founds8 = this.findIndex(item);
          this.carts[founds8].qty += 1;
          this.carts[founds8].total = this.carts[founds8].qty * this.carts[founds8].price;
        }
      }
      if (item.id == 11) {
        //bye others
        this.coffees8 += 1;
        if (this.coffees8 <= 1) {
          //one time in one
          this.pushData(item)
        } else {
          //bye the same
          var founds9 = this.findIndex(item);
          this.carts[founds9].qty += 1;
          this.carts[founds9].total = this.carts[founds9].qty * this.carts[founds9].price;
        }
      }
      if (item.id == 12) {
        //bye others
        this.coffees9 += 1;
        if (this.coffees9 <= 1) {
          //one time in one
          this.pushData(item)
        } else {
          //bye the same
          var founds10 = this.findIndex(item);
          this.carts[founds10].qty += 1;
          this.carts[founds10].total = this.carts[founds10].qty * this.carts[founds10].price;
        }
      }
    },
    pushData(item) {
      this.carts.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        qty: 1,
        total: item.price
      })
    },
    findIndex: function (item) {
      for (var i = 0; i < this.carts.length; i++) {
        if (this.carts[i].id == item.id) {
          return i; // find the id
        }
      }
      return -1;
    },
    minusQty: function (product) {
      product.qty -= 1;
      if (product.qty <= 1) {
        product.qty = 1
      }
      product.total = product.price * product.qty;
    },
    plusQty: function (product) {
      product.qty += 1;
      product.total = product.price * product.qty;
    },
    removeProduct(product) {
      if (confirm("Do you sure you want to delete.?")) {
        var index = this.carts.indexOf(product);
        this.carts.splice(index, 1);
        if (product.id == 1) {
          this.coffee = 0;
        } else {
          this.tea = 0;
        }
      }
    },
    total: function () {
      var sum = 0;
      this.carts.forEach(function (item) {
        sum += item.total;
      })
      return sum;
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@600&family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@100;200;300;400;500;600&family=Noto+Serif+Lao:wght@100;200;300;400;500;600;700&family=Roboto&display=swap');


.container {
  margin-top: 1px;
}

i {
  cursor: pointer;
  margin-left: 4px;
  margin-right: 4px;
}

.input-group input {
  width: 20%;
  height: 40%;
  color: rgb(31, 16, 160);
  box-shadow: green;
}

h1 {
  background-color: rgb(47, 214, 100);
  height: 100px;
  font: phetsarath;
  padding: 0.8rem 4rem;
  border-radius: 15px;
}

body {
  font-family: 'Noto Sans Lao', sans-serif;
  font-family: 'Roboto', sans-serif;
}

h2 {
  background-color: rgb(227, 149, 243);
  width: 500px;
  height: 50px;
  margin-right: 20px;
  text-align: center;
}

h3 {
  background-color: rgb(224, 56, 84);
  width: 500px;
  height: 50px;
  margin-right: 20px;
  font: phetsarath;
  padding: 0.8rem 4rem;
  border-radius: 15px;
}

.card-h-100 {
  column-count: auto;
  column-rule-style: double;
  column-gap: 3px;
}

.menu {
  display: flex;
  justify-content: center;
  align-content: center;
}

input {
  width: 50%;
}

input:hover {
  background: white;
  border: 2px solid rgb(71, 240, 113);
  border-radius: 20%;
  cursor: pointer;
}

.container-cart img {
  width: 140px;
  height: 100px;
}

h1 {
  font-family: 'Noto Sans Lao', sans-serif;
  font-family: 'Roboto', sans-serif;
}

h2 {
  font-family: 'Noto Sans Lao', sans-serif;
  font-family: 'Roboto', sans-serif;
}

h5 {
  font-family: 'Noto Sans Lao', sans-serif;
  font-family: 'Roboto', sans-serif;
}

p {
  font-family: 'Noto Sans Lao', sans-serif;
  font-family: 'Roboto', sans-serif;
}

ul ul a {
  margin: end;
  widows: 100px;
  height: 100px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  color: rgb(9, 9, 51);
  border-radius: 25px;
}

.card-footer {
  width: 100px;
}

.card-img-top {
  width: 100px;
  height: 80px;
}

.table {
  margin: auto;
  padding: 2rem;
  width: 500px;
  font-family: 'Noto Sans Lao', sans-serif;
  font-family: 'Roboto', sans-serif;

}

.col-sm-4 img {
  width: 40px;
  height: 40px;
}


.container-text {
  background-color: #9c3bdd52;
  font-size: 12;
  display: flex;
  padding: 1rem;
}

.forest {
  display: flex;
  justify-content: flex-end;
}

.row-01 {
  width: 10px;
  height: 30px;
  margin: auto;
}

.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #ffff;
  padding: 8px;
  font-size: 20px;
}
.sticky-right {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #ffff;
  padding: 20px;
  font-size: 20px;
}

.carousel-inner img {
  width: 80px;
  height: 400px;
}
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all 0.2s linear;
}
</style>
