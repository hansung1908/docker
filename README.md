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

### 설치
- 도커 설치 시 도커 컴포즈도 함께 설치
- 도커 허브 사이트에서 원하는 응용프로그램 or 운영체제가 설치된 컨테이너를 설치하는 명령어를 알려줌

### 생명주기
- 이미지 실행 시 지속적인 프로그램 실행을 위한 데몬이 없는 프로그램(jdk)가 설치되어 있다면 실행 후 바로 종료
- 데몬이 있는 서버 프로그램(아파치/톰캣)과 같은 프로그램이 설치된 이미지를 실행하면 종료되지 않고 계속 실행
- 실행주기는 프로그램에 따라 달라짐

### 명령어
- cmd창에서 실행
- docker pull 응용프로그램 or 운영체제 (해당 프로그램이 설치된 이미지 설치, :버전번호가 뒤에 붙으면 원하는 버전의 프로그램 설치)
- docker images (설치된 이미지에 대한 정보 확인)
- docker ps (실행 중인 컨테이너에 대한 정보 확인, ps -a는 모든 상태의 프로세스 정보 확인, -q는 실행 중인 컨테이너id만 확)
- docker rmi 프로그램이름 or 이미지id (해당 프로그램 삭제)
- docker stop 컨테이너id (실행 중인 컨테이너 실행 중지, 프로세스에선 아직 남아있음(프로세스 상태에 대한 내용을 확인하면 알 수 있음))
- docker rm 컨테이너 id (해당 컨테이너를 프로세스에서 완전 삭제, 중지 상태의 컨테이너만 가능)
- docker run 프로그램이름 or 이미지id (해당 프로그램 실행, 접속은 포트포워딩 이후에 가능, run -d는 백그라운드에서 실행(데몬으로 실행), -p 8080:80는 해당 포트번호로 포트포워딩, 이미지에 없는 프로그램 실행시 설치도 동시 진행)

### 명령어(이미지 전체 삭제)
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
