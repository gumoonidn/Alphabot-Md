exports.wait = () => {
    return ` 잠시만 기다려주세요~`
}

exports.ok = () => {
    return `완료`
}

exports.err = () => {
    return `오류 보통 기능`
}
exports.erorLink = () => {
    return `링크가 오류입니다`
}
exports.media = () => {
    return `다운로드할 미디어를 선택하세요.`
}
exports.replyImg = (prefix, command) => {
    return `캡션이 있는 사진 보내기/회신 ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `잘못된 형식 .에서 사용 방법을 확인하십시오 *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return ` 전하고 싶은 메시지를 입력해주세요!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `명령어 *${cmd}* 에 등록되지 않은 *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `이 명령은 특히 소유자를 위한 것입니다!`
}

exports.doneOwner = () => {
    return `완료되었습니다, 소유자 ~`
}

exports.groupOnly = () => {
    return ` 이 명령은 그룹에서만 사용할 수 있습니다!`
}

exports.adminOnly = () => {
    return `  이 명령은 그룹 관리자만 사용할 수 있습니다!`
}

exports.nhFalse = () => {
    return `유효하지 않은 코드!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 수치의 전당 」 ──*
    
완전히 차단됨: *${blockNumber.length}* 사용자\n`
}

exports.notAdmin = () => {
    return `사용자는 관리자가 아닙니다!`
}

exports.adminAlready = () => {
    return `관리자인 사용자는 승격할 수 없습니다!`
}

exports.botNotAdmin = () => {
    return `먼저 봇을 관리자로 만드세요!`
}

exports.received = (pushname) => {
    return `
안녕하세요 ${pushname}!
신고해 주셔서 감사합니다. 곧 신고해 드리겠습니다.`
}

exports.videoLimit = () => {
    return `파일 크기가 너무 큽니다!`
}

exports.notNum = (q) => {
    return `"${q}", 숫자가 아닙니다!`
}
exports.menunya = (salam, pushname) =>{
	return`안녕 친구 ${pushname} Gay, 👋 안전한 ${salam} , 이 whatsapp 봇은 gumoon Indonesia에서 만들었으며 모든 개인 정보 보호 정책은 gumoon Indonesia q의 개인 정보를 따릅니다.🙏      
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*안전한 ${salam} ${pushname} Gay*
*⌚시간 서버 : ${time}*
*📚 오늘의 리스트 메뉴 트렌드 :*

╭─❒ 「 Bot Info 」 
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}botstatus
╰❒ ${prefix}donate


╭─❒ 「 Owner 」 
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}sendsesi
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply image]

╭─❒ 「 Group 」 
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}add [62***]
├ ${prefix}kick @tag
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}group [open/close]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]

╭─❒ 「 Anime 」 
├ ${prefix}quotesanime
├ ${prefix}anime [query]
├ ${prefix}manga [query]
╰❒ ${prefix}character [query]


╭─❒ 「 Search 」 
├ ${prefix}ytsearch [query]
├ ${prefix}film [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
├ ${prefix}hentai
├ ${prefix}wattpad [query]
├ ${prefix}webtoons [query]
├ ${prefix}drakor [query]
╰❒ ${prefix}pinterest [query]


╭─❒ 「 Converter 」 
├ ${prefix}stiker [reply image]
├ ${prefix}tourl [image/video]
├ ${prefix}togif [sticker]
├ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]


╭─❒ 「 Image Effect 」 
├ ${prefix}wanted [reply image]
├ ${prefix}utatoo [reply image]
├ ${prefix}unsharpen [reply image]
├ ${prefix}thanos [reply image]
├ ${prefix}sniper [reply image]
├ ${prefix}sharpen [reply image]
├ ${prefix}sepia [reply image]
├ ${prefix}scary [reply image]
├ ${prefix}rip [reply image]
├ ${prefix}redple [reply image]
├ ${prefix}rejected [reply image]
├ ${prefix}posterize [reply image]
├ ${prefix}ps4 [reply image]
├ ${prefix}pixelize [reply image]
├ ${prefix}missionpassed [reply image]
├ ${prefix}moustache [reply image]
├ ${prefix}lookwhatkarenhave [reply image]
├ ${prefix}jail [reply image]
├ ${prefix}invert [reply image]
├ ${prefix}instagram [reply image]
├ ${prefix}greyscale [reply image]
├ ${prefix}glitch [reply image]
├ ${prefix}gay [reply image]
├ ${prefix}frame [reply image]
├ ${prefix}fire [reply image]
├ ${prefix}distort [reply image]
├ ${prefix}dictator [reply image]
├ ${prefix}deepfry [reply image]
├ ${prefix}ddungeon [reply image]
├ ${prefix}circle [reply image]
├ ${prefix}challenger [reply image]
├ ${prefix}burn [reply image]
├ ${prefix}brazzers [reply image]
├ ${prefix}beautiful [reply image]
├ ${prefix}jail [reply image]
├ ${prefix}red [reply image]
├ ${prefix}gay [reply image]
├ ${prefix}bloo [reply image]
├ ${prefix}blue [reply image]
├ ${prefix}sepia [reply image]
├ ${prefix}green [reply image]
├ ${prefix}glass [reply image]
├ ${prefix}invert [reply image]
├ ${prefix}blurple [reply image]
├ ${prefix}blurple2 [reply image]
├ ${prefix}wasted [reply image]
├ ${prefix}passed [reply image]
├ ${prefix}triggered [reply image]
├ ${prefix}comrade [reply image]
├ ${prefix}greyscale [reply image]
├ ${prefix}threshold [reply image]
├ ${prefix}brightness [reply image]
╰❒ ${prefix}invertgreyscale [reply image]


╭─❒ 「 Download 」 
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [query]
├ ${prefix}ytmp3 [link]
├ ${prefix}ytmp4 [link]
├ ${prefix}facebook [link]
├ ${prefix}facebooksd [link]
├ ${prefix}facebookhd [link]
├ ${prefix}fbaudio [link]
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
╰❒ ${prefix}twitter link


╭─❒ 「 Random Anime 」
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
╰❒ ${prefix}cringe

 ╭─❒ 「 Textpro Menu 」
├ ${prefix}halloween2 text|text2
├ ${prefix}horror text|text2
├ ${prefix}game8bit text|text2
├ ${prefix}layered text|text2
├ ${prefix}glitch2 text|text2
├ ${prefix}coolg text|text2
├ ${prefix}coolwg text|text2
├ ${prefix}realistic text|text2
├ ${prefix}space3d text|text2
├ ${prefix}gtiktok text|text2
├ ${prefix}stone text|text2
├ ${prefix}marvel text|text2
├ ${prefix}marvel2 text|text2
├ ${prefix}pornhub text|text2
├ ${prefix}avengers text|text2
├ ${prefix}metalr text|text2
├ ${prefix}metalg text|text2
├ ${prefix}metalg2 text|text2
├ ${prefix}halloween2 text|text2
├ ${prefix}lion text|text2
├ ${prefix}wolf_bw text|text2
├ ${prefix}wolf_g text|text2
├ ${prefix}ninja text|text2
├ ${prefix}3dsteel text|text2
├ ${prefix}horror2 text|text2
├ ${prefix}lava text|text2
├ ${prefix}bagel text|text2
├ ${prefix}blackpink text
├ ${prefix}rainbow2 text
├ ${prefix}water_pipe text
├ ${prefix}halloween text
├ ${prefix}sketch text
├ ${prefix}sircuit text
├ ${prefix}discovery text
├ ${prefix}metallic2 text
├ ${prefix}fiction text
├ ${prefix}demon text
├ ${prefix}transformer text
├ ${prefix}berry text
├ ${prefix}thunder text
├ ${prefix}magma text
├ ${prefix}3dstone text
├ ${prefix}neon text
├ ${prefix}glitch text
├ ${prefix}harry_potter text
├ ${prefix}embossed text
├ ${prefix}broken text
├ ${prefix}papercut text
├ ${prefix}gradient text
├ ${prefix}glossy text
├ ${prefix}watercolor text
├ ${prefix}multicolor text
├ ${prefix}neon_devil text
├ ${prefix}underwater text
├ ${prefix}bear text
├ ${prefix}wonderfulg text
├ ${prefix}christmas text
├ ${prefix}neon_light text
├ ${prefix}snow text
├ ${prefix}cloudsky text
├ ${prefix}luxury2 text
├ ${prefix}gradient2 text
├ ${prefix}summer text
├ ${prefix}writing text
├ ${prefix}engraved text
├ ${prefix}summery text
├ ${prefix}3dglue text
├ ${prefix}metaldark text
├ ${prefix}neonlight text
├ ${prefix}oscar text
├ ${prefix}minion text
├ ${prefix}holographic text
├ ${prefix}purple text
├ ${prefix}glossyb text
├ ${prefix}deluxe2 text
├ ${prefix}glossyc text
├ ${prefix}fabric text
├ ${prefix}neonc text
├ ${prefix}newyear text
├ ${prefix}newyear2 text
├ ${prefix}metals text
├ ${prefix}xmas text
├ ${prefix}blood text
├ ${prefix}darkg text
├ ${prefix}joker text
├ ${prefix}wicker text
├ ${prefix}natural text
├ ${prefix}firework text
├ ${prefix}skeleton text
├ ${prefix}balloon text
├ ${prefix}balloon2 text
├ ${prefix}balloon3 text
├ ${prefix}balloon4 text
├ ${prefix}balloon5 text
├ ${prefix}balloon6 text
├ ${prefix}balloon7 text
├ ${prefix}steel text
├ ${prefix}gloss text
├ ${prefix}denim text
├ ${prefix}decorate text
├ ${prefix}decorate2 text
├ ${prefix}peridot text
├ ${prefix}rock text
├ ${prefix}glass text
├ ${prefix}glass2 text
├ ${prefix}glass3 text
├ ${prefix}glass4 text
├ ${prefix}glass5 text
├ ${prefix}glass6 text
├ ${prefix}glass7 text
├ ${prefix}glass8 text
├ ${prefix}captain_as2 text
├ ${prefix}robot text
├ ${prefix}equalizer text
├ ${prefix}toxic text
├ ${prefix}sparkling text
├ ${prefix}sparkling2 text
├ ${prefix}sparkling3 text
├ ${prefix}sparkling4 text
├ ${prefix}sparkling5 text
├ ${prefix}sparkling6 text
├ ${prefix}sparkling7 text
├ ${prefix}decorative text
├ ${prefix}chocolate text
├ ${prefix}strawberry text
├ ${prefix}koifish text
├ ${prefix}bread text
├ ${prefix}matrix text
├ ${prefix}blood2 text
├ ${prefix}neonligth2 text
├ ${prefix}thunder2 text
├ ${prefix}3dbox text
├ ${prefix}neon2 text
├ ${prefix}roadw text
├ ${prefix}bokeh text
├ ${prefix}gneon text
├ ${prefix}advanced text
├ ${prefix}dropwater text
├ ${prefix}wall text
├ ${prefix}chrismast text
├ ${prefix}honey text
├ ${prefix}drug text
├ ${prefix}marble text
├ ${prefix}marble2 text
├ ${prefix}ice text
├ ${prefix}juice text
├ ${prefix}rusty text
├ ${prefix}abstra text
├ ${prefix}biscuit text
├ ${prefix}wood text
├ ${prefix}scifi text
├ ${prefix}metalr text
├ ${prefix}purpleg text
├ ${prefix}shiny text 
├ ${prefix}jewelry text
├ ${prefix}jewelry2 text
├ ${prefix}jewelry3 text
├ ${prefix}jewelry4 text
├ ${prefix}jewelry5 text
├ ${prefix}jewelry6 text
├ ${prefix}jewelry7 text
├ ${prefix}jewelry8 text
├ ${prefix}metalh text
├ ${prefix}golden text
├ ${prefix}glitter text
├ ${prefix}glitter2 text
├ ${prefix}glitter3 text
├ ${prefix}glitter4 text
├ ${prefix}glitter5 text
├ ${prefix}glitter6 text
├ ${prefix}glitter7 text
├ ${prefix}metale text
├ ${prefix}carbon text
├ ${prefix}candy text
├ ${prefix}metalb text
├ ${prefix}gemb text
├ ${prefix}3dchrome text
├ ${prefix}metalb2 text
├ ${prefix}metalg text
╰❒ ${prefix}metalg text


╭─❒ 「 Others 」
├ ${prefix}kalkulator
├ ${prefix}ttp [text]
╰❒ ${prefix}attp [text]

이용약관 구문인도네시아 이용약관 준수

    `
}

exports.rules = (prefix) => {
    return `

*── 「 RULES AND FAQ 」 ──*

1. 봇을 스팸하지 마십시오. 🙅
제재: *경고/소프트 차단*

2. 봇을 부르지 마세요. ☎️
제재: *소프트 블록*

3. 봇을 악용하지 마십시오.😖
제재: *영구 차단*

🗯️ 봇이 아니거나 응답이 느립니까?
➡️ 네트워크, 신호, Whatsapp 및 어떤 이유로 금지된 영향을 받을 수 있습니다. 규칙을 지켜주세요‼️

🗯️ 이 봇에서 스크립트를 어디에서 받을 수 있습니까?
➡️ 이 스크립트는 여전히 비공개이며 거래된 적이 없습니다. 사기꾼을 아는 것이 현명합니다.

🗯️ 그룹에 추가할 수 있습니까?
➡️ 봇은 현재 상태를 추가할 수 있는 무료 상태입니다.

🗯️ 접두사는 무엇입니까?
➡️ 이 봇은 여러 접두사를 사용합니다. 즉, #, 접두사를 사용할 수 있습니다. 및 기타 합리적인 접두사.

🗯️ 언니, 왜 채팅 주인이 응답하지 않습니까?
➡️ 소유자는 봇 및 오류 문제에 대한 질문에만 응답하며, 지인이나 스크립트를 구걸하는 것은 아닙니다.


규칙을 이해했다면 다음을 입력하십시오. *allmenu* 시작한다!

⚠️ trendtoday의 모든 정책 및 조항은 소유자가 보유하며 모든 정책 변경은 소유자가 언제든지 사용자를 취소, 차단할 수 있는 권한이 있습니다(*﹏*) 

매우 감사합니다! 트랜드투데이 봇 제작 프로젝트에 도움을 주신 친절한 유저분들과 몇몇 분들을 위해

`
}
exports.welcome = () =>{
	return`Halo ${pushname}, Jangan Lupa Intro Gay
	
📛 𝖭𝖺𝗆𝖺 :
🔞 𝖴𝗆𝗎𝗋 :
🧑 𝖦𝖾𝗇𝖽𝖾𝗋 :
╰ Patuhi Syarat Dan Ketentuan Gumoon Indonesia Ya Gay ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*── 「 SOURCE 」 ──*

`
}
exports.tos = (ownernomer) => {
    return `

*── 「 DONATE 」 ──*

Hai 👋
layanan bot ini tidak membuka donasi teman-teman, Donasi-kan lah ke anak yatim piatu atau orang orang yang lebih membutuhkan, hal tersebut sudah menjadi bentuk donasi ke bot ini, terima kasih. Atau kalian bisa donasi ke sesama yang membutuhkan di https://kitabisa.com/


이 봇 서비스는 기부, 친구, 고아 또는 더 필요한 사람들에게 기부를 열지 않고이 봇에 기부 형식이되었습니다. 감사합니다.
    
    `
}

exports.ownermenu = (prefix) =>{
return`*Owner*
• < evaluate
• > evaluate
• $ exec
• => exec
• ${prefix}sendsesi
• ${prefix}join [link]
• ${prefix}self
• ${prefix}public [only bot]
• ${prefix}del [pesan bot]
• ${prefix}setppbot [reply image]
`}

exports.group = (prefix) =>{
	return`*Group* 
• ${prefix}revoke
• ${prefix}leave
• ${prefix}add [62***]
• ${prefix}kick @tag
• ${prefix}revoke
• ${prefix}leave
• ${prefix}linkgc
• ${prefix}group [open/close]
• ${prefix}tagall [text]
• ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`*Anime*
• ${prefix}quotesanime
• ${prefix}anime [query]
• ${prefix}manga [query]
• ${prefix}character [query]
`}

exports.search = (prefix) =>{
	return`*Search*
• ${prefix}ytsearch [query]
• ${prefix}film [query]
• ${prefix}wallpaper [query]
• ${prefix}wikimedia [query]
• ${prefix}hentai
• ${prefix}wattpad [query]
• ${prefix}webtoons [query]
• ${prefix}drakor [query]
• ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`*Converter*
• ${prefix}stiker [reply image]
• ${prefix}tourl [image/video]
• ${prefix}togif [sticker]
• ${prefix}tomp4 [sticker]
• ${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`*Image Effect*
• ${prefix}wanted [reply image]
• ${prefix}utatoo [reply image]
• ${prefix}unsharpen [reply image]
• ${prefix}thanos [reply image]
• ${prefix}sniper [reply image]
• ${prefix}sharpen [reply image]
• ${prefix}sepia [reply image]
• ${prefix}scary [reply image]
• ${prefix}rip [reply image]
• ${prefix}redple [reply image]
• ${prefix}rejected [reply image]
• ${prefix}posterize [reply image]
• ${prefix}ps4 [reply image]
• ${prefix}pixelize [reply image]
• ${prefix}missionpassed [reply image]
• ${prefix}moustache [reply image]
• ${prefix}lookwhatkarenhave [reply image]
• ${prefix}jail [reply image]
• ${prefix}invert [reply image]
• ${prefix}instagram [reply image]
• ${prefix}greyscale [reply image]
• ${prefix}glitch [reply image]
• ${prefix}gay [reply image]
• ${prefix}frame [reply image]
• ${prefix}fire [reply image]
• ${prefix}distort [reply image]
• ${prefix}dictator [reply image]
• ${prefix}deepfry [reply image]
• ${prefix}ddungeon [reply image]
• ${prefix}circle [reply image]
• ${prefix}challenger [reply image]
• ${prefix}burn [reply image]
• ${prefix}brazzers [reply image]
• ${prefix}beautiful [reply image]
• ${prefix}jail [reply image]
• ${prefix}red [reply image]
• ${prefix}gay [reply image]
• ${prefix}bloo [reply image]
• ${prefix}blue [reply image]
• ${prefix}sepia [reply image]
• ${prefix}green [reply image]
• ${prefix}glass [reply image]
• ${prefix}invert [reply image]
• ${prefix}blurple [reply image]
• ${prefix}blurple2 [reply image]
• ${prefix}wasted [reply image]
• ${prefix}passed [reply image]
• ${prefix}triggered [reply image]
• ${prefix}comrade [reply image]
• ${prefix}greyscale [reply image]
• ${prefix}threshold [reply image]
• ${prefix}brightness [reply image]
• ${prefix}invertgreyscale [reply image]
`
}

exports.download = (prefix) =>{
return`*Download*
• ${prefix}tiktok [link]
• ${prefix}tiktoknowm [link]
• ${prefix}tiktokwm [link]
• ${prefix}tiktokaudio [link]
• ${prefix}ytdl [link]
• ${prefix}play [query]
• ${prefix}ytmp3 [link]
• ${prefix}ytmp4 [link]
• ${prefix}facebook [link]
• ${prefix}facebooksd [link]
• ${prefix}facebookhd [link]
• ${prefix}fbaudio [link]
• ${prefix}igstory [username]
• ${prefix}igdl [link]
• ${prefix}igphoto [link]
• ${prefix}igvideo [link]
• ${prefix}igreels [link]
• ${prefix}igtv [link]
• ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`*Random Anime*
• ${prefix}loli
• ${prefix}neko
• ${prefix}waifu
• ${prefix}shinobu
• ${prefix}megumin
• ${prefix}bully
• ${prefix}cuddle
• ${prefix}cry
• ${prefix}hug
• ${prefix}awoo
• ${prefix}kiss
• ${prefix}lick
• ${prefix}pat
• ${prefix}smug
• ${prefix}bonk
• ${prefix}yeet
• ${prefix}blush
• ${prefix}smile
• ${prefix}wave
• ${prefix}highfive
• ${prefix}handhold
• ${prefix}nom
• ${prefix}bite
• ${prefix}glomp
• ${prefix}slap
• ${prefix}kill
• ${prefix}happy
• ${prefix}wink
• ${prefix}poke
• ${prefix}dance
• ${prefix}cringe
`
}

exports.textpro = (prefix) =>{
	return`*Textpro*
• ${prefix}halloween2 text|text2
• ${prefix}horror text|text2
• ${prefix}game8bit text|text2
• ${prefix}layered text|text2
• ${prefix}glitch2 text|text2
• ${prefix}coolg text|text2
• ${prefix}coolwg text|text2
• ${prefix}realistic text|text2
• ${prefix}space3d text|text2
• ${prefix}gtiktok text|text2
• ${prefix}stone text|text2
• ${prefix}marvel text|text2
• ${prefix}marvel2 text|text2
• ${prefix}pornhub text|text2
• ${prefix}avengers text|text2
• ${prefix}metalr text|text2
• ${prefix}metalg text|text2
• ${prefix}metalg2 text|text2
• ${prefix}halloween2 text|text2
• ${prefix}lion text|text2
• ${prefix}wolf_bw text|text2
• ${prefix}wolf_g text|text2
• ${prefix}ninja text|text2
• ${prefix}3dsteel text|text2
• ${prefix}horror2 text|text2
• ${prefix}lava text|text2
• ${prefix}bagel text|text2
• ${prefix}blackpink text
• ${prefix}rainbow2 text
• ${prefix}water_pipe text
• ${prefix}halloween text
• ${prefix}sketch text
• ${prefix}sircuit text
• ${prefix}discovery text
• ${prefix}metallic2 text
• ${prefix}fiction text
• ${prefix}demon text
• ${prefix}transformer text
• ${prefix}berry text
• ${prefix}thunder text
• ${prefix}magma text
• ${prefix}3dstone text
• ${prefix}neon text
• ${prefix}glitch text
• ${prefix}harry_potter text
• ${prefix}embossed text
• ${prefix}broken text
• ${prefix}papercut text
• ${prefix}gradient text
• ${prefix}glossy text
• ${prefix}watercolor text
• ${prefix}multicolor text
• ${prefix}neon_devil text
• ${prefix}underwater text
• ${prefix}bear text
• ${prefix}wonderfulg text
• ${prefix}christmas text
• ${prefix}neon_light text
• ${prefix}snow text
• ${prefix}cloudsky text
• ${prefix}luxury2 text
• ${prefix}gradient2 text
• ${prefix}summer text
• ${prefix}writing text
• ${prefix}engraved text
• ${prefix}summery text
• ${prefix}3dglue text
• ${prefix}metaldark text
• ${prefix}neonlight text
• ${prefix}oscar text
• ${prefix}minion text
• ${prefix}holographic text
• ${prefix}purple text
• ${prefix}glossyb text
• ${prefix}deluxe2 text
• ${prefix}glossyc text
• ${prefix}fabric text
• ${prefix}neonc text
• ${prefix}newyear text
• ${prefix}newyear2 text
• ${prefix}metals text
• ${prefix}xmas text
• ${prefix}blood text
• ${prefix}darkg text
• ${prefix}joker text
• ${prefix}wicker text
• ${prefix}natural text
• ${prefix}firework text
• ${prefix}skeleton text
• ${prefix}balloon text
• ${prefix}balloon2 text
• ${prefix}balloon3 text
• ${prefix}balloon4 text
• ${prefix}balloon5 text
• ${prefix}balloon6 text
• ${prefix}balloon7 text
• ${prefix}steel text
• ${prefix}gloss text
• ${prefix}denim text
• ${prefix}decorate text
• ${prefix}decorate2 text
• ${prefix}peridot text
• ${prefix}rock text
• ${prefix}glass text
• ${prefix}glass2 text
• ${prefix}glass3 text
• ${prefix}glass4 text
• ${prefix}glass5 text
• ${prefix}glass6 text
• ${prefix}glass7 text
• ${prefix}glass8 text
• ${prefix}captain_as2 text
• ${prefix}robot text
• ${prefix}equalizer text
• ${prefix}toxic text
• ${prefix}sparkling text
• ${prefix}sparkling2 text
• ${prefix}sparkling3 text
• ${prefix}sparkling4 text
• ${prefix}sparkling5 text
• ${prefix}sparkling6 text
• ${prefix}sparkling7 text
• ${prefix}decorative text
• ${prefix}chocolate text
• ${prefix}strawberry text
• ${prefix}koifish text
• ${prefix}bread text
• ${prefix}matrix text
• ${prefix}blood2 text
• ${prefix}neonligth2 text
• ${prefix}thunder2 text
• ${prefix}3dbox text
• ${prefix}neon2 text
• ${prefix}roadw text
• ${prefix}bokeh text
• ${prefix}gneon text
• ${prefix}advanced text
• ${prefix}dropwater text
• ${prefix}wall text
• ${prefix}chrismast text
• ${prefix}honey text
• ${prefix}drug text
• ${prefix}marble text
• ${prefix}marble2 text
• ${prefix}ice text
• ${prefix}juice text
• ${prefix}rusty text
• ${prefix}abstra text
• ${prefix}biscuit text
• ${prefix}wood text
• ${prefix}scifi text
• ${prefix}metalr text
• ${prefix}purpleg text
• ${prefix}shiny text 
• ${prefix}jewelry text
• ${prefix}jewelry2 text
• ${prefix}jewelry3 text
• ${prefix}jewelry4 text
• ${prefix}jewelry5 text
• ${prefix}jewelry6 text
• ${prefix}jewelry7 text
• ${prefix}jewelry8 text
• ${prefix}metalh text
• ${prefix}golden text
• ${prefix}glitter text
• ${prefix}glitter2 text
• ${prefix}glitter3 text
• ${prefix}glitter4 text
• ${prefix}glitter5 text
• ${prefix}glitter6 text
• ${prefix}glitter7 text
• ${prefix}metale text
• ${prefix}carbon text
• ${prefix}candy text
• ${prefix}metalb text
• ${prefix}gemb text
• ${prefix}3dchrome text
• ${prefix}metalb2 text
• ${prefix}metalg text
• ${prefix}metalg text
`
}

exports.other = (prefix) =>{
return`*Others*
• ${prefix}kalkulator
• ${prefix}ttp [text]
• ${prefix}attp [text]
`
}

exports.tqto = () =>{
	return`*Thanks To*
• My God
• My Parents
• Fatih A.
• Ferdi
• DikaArdnt
• Mhankbarbar
• Nurutomo
• Rashid
• ZeeoneOfc
• Penyedia Module
• And All Support
`
}