# docker
- 부두에서 컨테이너를 다루는 노동자를 의미
- 응용 프로그램 실행을 위한 운영체제(os)와 동작을 위한 여러 소프트웨어로 구성된 환경을 각 프로그램마다 독립된 환경에서 실행하도록 도와주는 툴
- 구성된 환경이 설치되어 제공하는 쪽을 호스트(host), 이를 제공받아 독립적으로 실행하는 쪽을 컨테이너(container)
- 컨테이너는 무거운 운영체제 전체가 설치되는 것이 아닌 실행에 필요한 라이브러리(lib)와 실행 파일(bin, jar)만 포함
- 이미 구성이 갖춰진 운영체제를 공유하기에 번거롭게 각 환경에 구성하지 않아도 되고 하나의 운영체제에서 실행되기에 속도도 빠르고 추가 설치에 의한 저장용량도 절약
- 커널 영역에서 호스트 서버와 함께 각 컨테이너들과 도커 서버가 운용됨
- 호스트 서버에서 명령을 내리면 도커 서버가 받아 컨테이너로 전달
- 도커에서 설치만 된 컨테이너는 이미지라고 하며 메모리에 로딩(인스턴스 상태)되어 실행 중인 이미지는 컨테이너라고 함
- 컨테이너의 네트워크 구성은 호스트 서버와 다르므로 localhost를 통한 접속이 안됨
- 컨테이너의 포트로 접속하기 위해서 호스트 서버는 요청을 받고 이를 컨테이너로 건네주는 포트포워딩이 필요

### compose, hub
- 컴포즈(compose)는 두개 이상의 컨테이너를 결합하여 실행
- 허브(hub)는 깃허브처럼 컨테이너를 관리하는 서버에 자신의 컨테이너를 업로드
- 깃허브에선 깃이 필요한거 처럼 도커 허브를 이용하려면 도커 설치는 필수
- 서로 요청과 응답을 받는 두 컨테이너는 각각 도커 파일을 통해 이미지로 실행해야하는데 컴포즈 파일(yaml)을 작성하면 두 컨테이너가 유기적 연결을 통해 한번에 실행

### 설치
- 도커 설치 시 도커 컴포즈도 함께 설치
- 도커 허브 사이트에서 원하는 응용프로그램 or 운영체제가 설치된 컨테이너를 설치하는 명령어를 알려줌

### 생명주기
- 이미지 실행 시 지속적인 프로그램 실행을 위한 데몬이 없는 프로그램(jdk)가 설치되어 있다면 실행 후 바로 종료
- 데몬이 있는 서버 프로그램(아파치/톰캣(httpd))과 같은 프로그램이 설치된 이미지를 실행하면 종료되지 않고 계속 실행
- 실행주기는 프로그램에 따라 달라짐

### 명령어
- cmd창에서 실행
- docker pull 응용프로그램 or 운영체제 or 개인레포지토리주소 (해당 프로그램이 설치된 이미지 설치, :버전번호가 뒤에 붙으면 원하는 버전의 프로그램 설치)
- docker images (설치된 이미지에 대한 정보 확인)
- docker ps (실행 중인 컨테이너에 대한 정보 확인, ps -a는 모든 상태의 프로세스 정보 확인, -q는 실행 중인 컨테이너id만 확)
- docker rmi 프로그램이름 or 이미지id (해당 프로그램 삭제)
- docker stop 컨테이너id (실행 중인 컨테이너 실행 중지, 프로세스에선 아직 남아있음(프로세스 상태에 대한 내용을 확인하면 알 수 있음))
- docker rm 컨테이너 id (해당 컨테이너를 프로세스에서 완전 삭제)
- docker attach (실행중인 컨테이너에 접근, 컨테이너에 설치된 운영체제에 따라 명령어 체계가 달라짐, 나갈땐 exit, crtl + p -> ctrl + q (프로세스를 종료하지 않고 나오기))
- docker exec 변경할명령어(-it) 컨테이너id 접근방식(bash) (해당 컨테이너의 명령어를 변경)
- docker commit 컨테이너id 허브리포지토리주소 (해당 컨테이너를 이미지화하여 커밋, :1.0라는 태그를 붙혀 버전 표시)
- docker push 허브리포지토리주소 (해당 이미지를 허브에 업로드)
- docker logs 컨테이너id (해당 컨테이너의 콘솔로그창 확인)
- docker inspect 컨테이너id (해당 컨테이너의 설치된 이미지를 분석)

### 명령어(실행)
- docker run 프로그램이름 or 이미지id (해당 프로그램 실행, 접속은 포트포워딩 이후에 가능, 옵션은 run 명령어 바로 뒤에 붙혀줌, 이미지에 없는 프로그램 실행시 설치도 동시 진행)
- -d (백그라운드에서 실행(데몬으로 실행))
- -p 8080:80 (해당 포트번호로 포트포워딩)
- --name 컨테이너이름 (직접 컨테이너의 이름을 설정)
- --link 링크할컨테이너이름 (실행하려는 컨테이너와 링크된 컨테이너를 같이 실행)
- -dit (3개의 명령어가 결합된 형태로 d는 데몬 실행, i는 인터랙션으로 입력가능, t는 터미널모드로 실행, 보통 이렇게 쓰임, bash라는 쉘 프로그램으로 작동하여 호스트 서버에서 bash를 통해 메세지 전송 가능)
- 데몬이 없는 경우 맨 뒤에 bash를 붙혀서 사용함과 동시에 프로세스에서 꺼지지 않고 계속 실행
- 운영체제는 -dit 운영체제이름 bash, 데몬이 있는 httpd는 -d -p 8080:80 httpd 입력후 exec -it 컨테이너id bash로 접근(httpd는 처음부터 bash로 생성시 프로세스가 삭제, 중간에 attach 접근도 x)
- -v 해당폴더주소(c:\users\hansu\webapp:/usr/local/apache2/htdocs) (/usr/local/apache2/htdocs으로 접근시 c:\users\hansu\webapp를 자동으로 연결, webapp에 index.html파일 생성하면 포트주소로 접근시 해당 파일 띄움)

### 명령어(실행 상태의 컨테이너를 이미지까지 한꺼번에 삭제)
- linux 혹은 MAC (windows에서 git bash)
- docker stop $(docker ps -q)
- docker rm $(docker ps -a -q)
- docker rmi -f $(docker images -q)
- windows
- for /f "delims=" %A in ('docker ps -q') do (set rm1=%A)
- for /f "delims=" %A in ('docker ps -a -q') do (set rm2=%A)
- for /f "delims=" %A in ('docker images -q') do (set rm3=%A)
- docker stop %rm1%
- docker rm %rm2%
- docker rmi -f %rm3%
- shift + insert (cmd창에 붙여넣기)

### 명령어(ubuntu(linux)에서 vi에디터 설치까지)
- run -dit 후 attach로 접근
- apt update (다운로드 가능한 프로그램 목록 업데이트)
- apt install vim (vi에디터 설치)
- cd home (home 폴더 접근)
- mkdir ubuntu (ubuntu라는 이름의 폴더 생성)
- vi hello (hello라는 이름의 파일 생성, 내용 입력은 aws repository를 참고)

### docker file(기본적인 과정)
- mkdir dockerwork (bash가 가르키는 곳에 dockerwork라는 이름의 폴더 생성)
- notepad를 통해 dockerfile 생성 (txt 확장자가 붙으면 제거, 확장자가 file이여야 함)
- dockerfile 내용 (httpd 이미지를 가져와 .webapp에 있는 내용을 /usr/local/apache2/htdocs에 복붙, 이때 httpd-foreground 커맨드로 실행)
- FROM httpd
- COPY ./webapp /usr/local/apache2/htdocs
- CMD ["httpd-foreground"]
- dockerwork 폴더 안에 webapp 폴더를 생성 후, hello world를 띄우는 index.html 파일 생성
- cmd에서 dockerwork 폴더를 가리킴
- docker build -t webserver ./ (해당 폴더에서 dockerfile을 찾아 빌드, 이름은 webserver)
- 이후 run하여 컨테이너 실행시키면 해당 포트로 접속시 index파일의 내용이 화면에 뜸

### 명령어(docker file)
- WORKDIR /app (호스트 서버(window)에서 도커를 통해 터미널로 컨테이너(ubuntu)로 접근시 해당 주소로 연결)
- COPY /build/aws-v3-0.0.3.jar ./application.jar (/build에 있는 aws-v3-0.0.3.jar를 가져와 ./(WORKDIR로 폴더 지정시 해당 폴더(/app)로 시작)에 있는 application.jar로 복붙, 압축해제 x)
- ADD 파일 (해당 파일을 추가, zip파일은 압축해제 후 추가)
- ENTRYPOINT ["java",  "-jar", "-Dspring.profiles.active=dev", "application.jar"] (jar 실행을 위해 java를 띄우고 jar파일이라 명시, dev라는 옵션을 추가하고 application.jar에 설정)
- CMD ["--server.port=8080"] (서버포트를 8080으로 설정, entrypoint는 실행, cmd는 옵션)
- RUN 리눅스명령어(apt-get update, apt-get install -y nginx) (해당 리눅스 명령어를 실행)
- COPY conf/nginx.conf /etc/nginx/conf.d/default.conf (nginx.conf 설정파일을 default.conf 설정파일에 복붙)
- ENTRYPOINT ["nginx", "-g", "daemon off;"] (nginx 실행을 위해 -g옵션을 추가하고 데몬을 중지하는 명령어 설정(백그라운드에서 nginx 실행시 바로 종료되므로 포그라운드 실행을 위해 종료))
- ENV MYSQL_USER=임의아이디 (mysql 접속시 들어가기 위해 필요한 아이디 환경변수 설정, MYSQL_PASSWORD, ROOT_PASSWORD, DATABASE도 설정해야 하고 각각 임의로 지어줌)
- CMD ["--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci"] (서버 문자 인코딩을 utf8mb4로 설정, 자세한건 도커 허브 mysql 문서 참조)

### nginx
- 웹 서버용 오픈 소스 프로젝트, 가볍고 성능이 우수
- conf 파일이나 html 파일처럼 기본적인 틀이 잡혀있는 파일은 nginx 내에 경로에 있는 해당 파일들을 복사하여 변경한 뒤 해당 경로로 COPY를 통해 덮어씌우면 됨
- 여러 서버를 운영할 경우 각 서버로 포트포워딩을 하기 위해 프록시 서버(로드 밸런서)를 두어 이곳으로 모든 요청이 거쳐 해당 서버로 진입
- conf 파일 설정시 upstram 서버이름 (해당 서버의 주소 설정), location /서버이름 (해당 서버로 포트포워딩)

### mysql
- 오픈 소스 rdbms(relationl database management system)
- 도커 파일로 mysql을 빌드하고 컨테이너에 실행하면 mysql workbanch로 들어가 'mysql connections' 옆 + 버튼을 눌러 연결
- 커넥션 이름은 임의로 짓고 포트 번호는 컨테이너 실행시 넣었던 번호(기본은 3306)으로 설정, 유저네임과 비밀번호는 도커 파일에 설정한거 그대로 입력('test connection' 버튼으로 테스트 가능)
- show variables like 'character_set_%'; (문자 인코딩 설정 확인, 도커 파일에서 설정한 것과 일치해야 함)
- 테이블 데이터를 컨테이너에 두고 사용하면 매번 새로운 볼륨 연결을 요구하기에 호스트 서버에 데이터를 저장하는 폴더를 두고 볼륨 연결
- docker run -d -v c:/Spring/docker/ex05/mysql-volume:/var/lib/mysql -p 3307:3306 --name mysql-container mysql-image (호스트 서버에 있는 폴더를 볼륨 연결하여 컨테이너 실행, c:/Spring/docker/ex05/mysql-volume 대신 임의로 이름 지어진 볼륨을 사용해도 저장 o)

### docker-compose.yml
- 기존 스프링에서 쓰던 yml 방식을 사용
- mysqldb를 제외한 모든 설정은 키워드이며 mysqldb는 프로세스 이름
- cmd에 docker-compose up (컴포즈 파일 실행, 맨뒤에 -d를 붙히면 백그라운드 실행)
- db테스트를 위해 person 테이블(id int pk, name varchar(100))을 create하고 insert로 (1, "qwer")의 더미 데이터를 입력
- 간단한 python 웹 어플리케이션을 도커 컴포즈로 실행을 해보기 위한 튜토리얼은 'https://docs.docker.com/compose/gettingstarted/'

### spring 프로젝트 배포
- build.gradle 파일에 jar의 설정을 enabled = false로 하면 jar 파일이 하나만 생성 (원래는 2개 생성)
- docker-compose에서 db는 bulid되는 Dockerfile을 해당 경로를 기준으로 구우라는 설정, networks는 db랑 spring이랑 같은 네트워크 사용한다는 설정 (network는 키워드)
- server는 depend_on을 db로 설정하여 db가 실행이 안될 경우 server 실행도 막음 (db에 의존하여 실행), networks도 db와 동일하게 설정하여 같은 네트워크를 사용한다고 표시
- spring내 application.yml 설정시 db를 환경변수가 아닌 그대로 적어주면 중간에 있는 db라는 키워드를 인식 x (docker-compose는 dns 설정이 되어 있어 환경변수로 해야 해당 db의 ip주소로 치환)