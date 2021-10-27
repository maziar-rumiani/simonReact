// const enConfig = {
//     lang:"NL",
//     weekDays:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
//     numberOfUndones:'Number of undone tasks',
//     mainInput:'Enter a new task here ...',
//     undone:'undone',
//     done:'done',
//     save:'save',
//     edit:'edit',
//     delete:'delete',
//     clearAll:'Clear All',
//     visits:'Visits',
//     sure:'Are you sure?',
//     yes:'Yes',
//     cancel:'cancel'
// }
// const nlConfig = {
//     lang:"EN",
//     weekDays:['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],
//     numberOfUndones:'Aantal ongedaan gemaakte taken',
//     mainInput:'Voer hier een nieuwe taak in ...',
//     undone:'Ongedaan',
//     done:'Gedaan',
//     save:'Opslaan',
//     edit:'Bewerking',
//     delete:'verwijderen',
//     clearAll:'Verwijder alles',
//     visits:'bezoeken',
//     sure:'Weet je zeker dat?',
//     yes:'Ja',
//     cancel:'Annuleren'
// }

// let lang = 'EN'
// let weekDays = enConfig.weekDays
// const inner = document.querySelectorAll('[data-inner]');
// const title = document.querySelectorAll('[data-title]');
// const place = document.querySelectorAll('[data-place]');

// document.querySelector('.lang').addEventListener('click',()=>{
//    console.log(inner);
//     inner.forEach( el => {
//         const key = el.innerText;
//         console.log(key)
//         el.innerText = lang === 'EN'?nlConfig[key]:enConfig[key]
//         weekDays = lang ==="NL"?nlConfig.weekDays:enConfig.weekDays
//     })
//     lang = lang ==="NL"?'EN':"NL"
// })
// export default  weekDays


