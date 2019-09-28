
var Request = new Object();
Request = GetRequest();
var name,zkzh;
name = Request['name'];
zkzh = Request['zkzh'];

var write=randomNum(142,160);
var listen=Math.round(randomNum(20,23)*7.1);

var read=Math.round(randomNum(20,23)*7.1);
if (zkzh == '140040191113912') {
    name = "潘齐洪";
    listen=147;
    read=161;
    write=166;
}
if (name == "潘齐洪") {
    zkzh = '140040191113912';
    listen=147;
    read=161;
    write=166;
}
var sum=write+listen+read;

