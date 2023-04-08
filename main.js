// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const nextBtn =$(".btn-next")
const prevBtn =$(".btn-prev")
const playlist = $(".playlist");
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const progress = $('#progress');
const player = $(".player");
const playBtn = $(".btn-toggle-play");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const PLAYER_STORAGE_KEY = 'Minh-Hoang-Player' ;
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom : false,
    isRepeat : false,
    config: {},
    songs: [
        {
            name: "Heartbeat",
            singer: "Marcus & Martines",
            path: "./assets/songs/heartbeat.mp3",
            image: "./assets/image/heartbeat1.jpg"
        },
        {
            name: "Symphony",
            singer: "Clean Bandit",
            path: "./assets/songs/symphony.mp3",
            image:
                "./assets/image/symphony.jpg"
        },
        {
            name: "Sugar",
            singer: "Maroon V",
            path:
                "./assets/songs/sugar.mp3",
            image: "./assets/image/sugar.jpg"
        },
        {
            name: "The Night",
            singer: "Avicii",
            path: "./assets/songs/thenight.mp3",
            image:
                "./assets/image/thenight.jpg"
        },
        {
            name:"Hai Mươi Hai Remix",
            singer : "AMEE",
            path: "./assets/songs/22.mp3",
            image: "./assets/image/22.jpg"
        },
        {
            name:"Attack on Titan",
            singer : "Unknown",
            path: "./assets/songs/attackontitan.mp3",
            image: "./assets/image/attack.jpg"
        },
        {
            name:"China-X",
            singer : "Unknown",
            path: "./assets/songs/chinax.mp3",
            image: "./assets/image/chinax.jpg"
        },
        {
            name:"Chờ ngày mưa tan",
            singer : "Noo Phước Thịnh",
            path: "./assets/songs/chongaymuatan.mp3",
            image: "./assets/image/chongaymuatan.jpg"
        },
        {
            name:"Cơn Mưa Ngang Qua",
            singer : "Sơn Tùng M-TP",
            path: "./assets/songs/conmua.mp3",
            image: "./assets/image/conmua.jpg"
        },
        {
            name:"Crossing Field",
            singer : "LiSa",
            path: "./assets/songs/crossingfield.mp3",
            image: "./assets/image/cross.jpg"
        },
        {
            name:"Booty",
            singer : "Deep Side",
            path: "./assets/songs/deepside.mp3",
            image: "./assets/image/deep.jfif"
        },
        {
            name:"Đế Vương",
            singer : "Đình Dũng",
            path: "./assets/songs/devuong.mp3",
            image: "./assets/image/devuong.jpg"
        },
        {
            name:"Đi Để Trở Về",
            singer : "Soobin Hoàng Sơn",
            path: "./assets/songs/didetrove.mp3",
            image: "./assets/image/didetrove.jpg"
        },
        {
            name:"Đoạn Tuyệt Nàng Đi Mix",
            singer : "Unknown",
            path: "./assets/songs/doantuyet.mp3",
            image: "./assets/image/doantuyet.jpg"
        },
        {
            name:"Fairy Tail",
            singer : "Unknown",
            path: "./assets/songs/fairytail.mp3",
            image: "./assets/image/fairy.png"
        },
        {
            name:"Flowers",
            singer : "Unknown",
            path: "./assets/songs/flowers.mp3",
            image: "./assets/image/unk.jpg"
        },
        {
            name:"Give Me Your Love",
            singer : "DEAMN",
            path: "./assets/songs/givemeyourlove.mp3",
            image: "./assets/image/give.jpg"
        },
        {
            name:"Hyp",
            singer : "Unknown",
            path: "./assets/songs/hyp.mp3",
            image: "./assets/image/unk.jpg"
        },
        {
            name:"Landtern",
            singer : "Unknown",
            path: "./assets/songs/landtern.mp3",
            image: "./assets/image/unk.jpg"
        },
        {
            name:"Legend Never Die",
            singer : "LOL World 2017",
            path: "./assets/songs/legend.mp3",
            image: "./assets/image/legend.jpg"
        },
        {
            name:"Light It Up",
            singer : "Unknown",
            path: "./assets/songs/lightitup.mp3",
            image: "./assets/image/unk.jpg"
        },
        {
            name:"Nắng Ấm Xa Dần",
            singer : "Sơn Tùng M-TP",
            path: "./assets/songs/nangamxadan.mp3",
            image: "./assets/image/nangam.jpg"
        },
        {
            name:"Một Giấc Mộng Xưa",
            singer : "Unknown",
            path: "./assets/songs/motgiacmongxua.mp3",
            image: "./assets/image/motgiacmongxua.jpg"
        },
        {
            name:"I Said I'm Naruto",
            singer : "Unknown",
            path: "./assets/songs/naruto.mp3",
            image: "./assets/image/naruto1.png",
        },
        {
            name:"Ngẫu Hứng",
            singer : "Hoaprox",
            path: "./assets/songs/ngauhung.mp3",
            image: "./assets/image/ngauhung.jpg"
        },
        {
            name:"Popsicle",
            singer : "TheFatRat",
            path: "./assets/songs/popsicle.mp3",
            image: "./assets/image/pop.jpg"
        },
        {
            name:"Rather Be",
            singer : "Clean Bandit",
            path: "./assets/songs/ratherbe.mp3",
            image: "./assets/image/rather.jpg"
        },
        {
            name:"Reality",
            singer : "Lost Frequencies",
            path: "./assets/songs/reality.mp3",
            image: "./assets/image/reality.jpg"
        },
        {
            name:"Save Me",
            singer : "DEAMN",
            path: "./assets/songs/saveme.mp3",
            image: "./assets/image/save.jpg"
        },
        {
            name:"Some Thing Just Like This",
            singer : "Coldplay & The Chainsmokers",
            path: "./assets/songs/something.mp3",
            image: "./assets/image/something.jpg"
        },
        {
            name:"Stream Đến Bao Giờ",
            singer : "Mixi",
            path: "./assets/songs/stream.mp3",
            image: "./assets/image/stream.jpg"
        },
        {
            name:"Tera",
            singer : "Xomu",
            path: "./assets/songs/tera.mp3",
            image: "./assets/image/unk.jpg"
        },
        {
            name:"That Girl",
            singer : "Unknown",
            path: "./assets/songs/thatgirl.mp3",
            image: "./assets/image/unk.jpg"
        },
        {
            name:"Way Back Home",
            singer : "SHAUN",
            path: "./assets/songs/waybackhome.mp3",
            image: "./assets/image/way.jpg"
        },
        {
            name:"Mười Năm Nhân Gian",
            singer : "Unknown",
            path: "./assets/songs/10nam.mp3",
            image: "./assets/image/unk.jpg"
        },{
            name:"Yêu Lại Từ Đầu",
            singer : "Khắc Việt",
            path: "./assets/songs/yeulaitudau.mp3",
            image: "./assets/image/khacviet.jfif"
        },

    ],
    setConfig: function (key, value) {
        this.config[key] = value;
        
      },
    render: function () {
            const htmls = this.songs.map((song, index) => 
                {
                return `
                            <div class="song ${index === this.currentIndex ? 'active':'' }" data-index="${index}">
                            <div class="thumb" style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                            </div>
                        `;
                });
        playlist.innerHTML = htmls.join("");
    }, 

     defindProperties: function () {
        Object.defineProperty(this,'currentSong',{
            get:function () {
                return this.songs[this.currentIndex];
            }
        })
    },

    handleEvents: function () {
        const _this = this;
        //Xử lý CD 
       const cdThumbAnimate =  cdThumb.animate([
            {
                transform: 'rotate(360deg)'
            }

        ],{
            duration:10000,
            iterations : Infinity,
        })
        cdThumbAnimate.pause();
        // Xử lý phóng to thu nhỏ
        const cdWidth = cd.offsetWidth;
        document.onscroll = function () {
            const scrollTop =window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px':0;
            cd.style.opacity = newCdWidth / cdWidth;
        };
        //Xử lý play song
        playBtn.onclick = function() { 
            if(_this.isPlaying){
                audio.pause();
            }else{
                audio.play();
            }
        }
        //Khi song được play
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimate.play();
        }
        //Khi song pause
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimate.pause();
        }
        //Khi tiến độ song thay đổi
        audio.ontimeupdate = function() {
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
            }
        }
        //Xử lý khi tua
        progress.onchange = function(e){
           const seekTime = audio.duration / 100 * e.target.value;
           audio.currentTime = seekTime;
        }
        //Xử lý next song
        nextBtn.onclick= function(){
            if(_this.isRandom){
                _this.playRandomSong();
            }else{
                _this.nextSong();
            }

            
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }
        // Xử lý prev song
        prevBtn.onclick= function(){
            if(_this.isRandom){
                _this.playRandomSong();
            }else{_this.prevSong();}
            
            audio.play();
            _this.render();
        }
        //Xử lý random song
        randomBtn.onclick= function(){
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle("active",_this.isRandom);
            _this.setConfig('isRandom',_this.isRandom);    
        }
        //Xử lý next xong while ended
        audio.onended = function() {
            if(_this.isRepeat){
                audio.play();
            }else{
                nextBtn.click();
            }
            
        }
        //Click vào playlist
        playlist.onclick= function(e){
            const songNode = e.target.closest(".song:not(.active)");
            if(songNode|| e.target.closest(".option")){
                //Xử lý click
                if(songNode){
                    _this.currentIndex =Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }

                //Xử lý option
            if(e.target.closest(".option")){
                    
                }
            }
        }
        //Xử lý repeat songs
        repeatBtn.onclick = function(){
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle("active",_this.isRepeat);
            _this.setConfig('isRepeat',_this.isRandom);  
        }

    },
    loadConfig: function () {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
      },
    loadCurrentSong:function () {
        
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src= this.currentSong.path;

    },
    nextSong:function () {
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();

    },
    prevSong:function () {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong:function (){
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        }while(newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    scrollToActiveSong:function () {
        setTimeout(function () {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block:'nearesrt',
            });
        },300)
    },
    start:function(){
        //Cấu hình
        this.loadConfig();
        //Định nghĩa các thuộc tính cho object
        this.defindProperties();

        //Lắng nghe và xử lý sự kiện
        this.handleEvents();

        //Tải bài hát hiện tại vào UI
        this.loadCurrentSong();

        //Render playlist
        this.render();

        randomBtn.classList.toggle("active",_this.isRandom);
        repeatBtn.classList.toggle("active",_this.isRepeat);

    }
};
    

app.start();
