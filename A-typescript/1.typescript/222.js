const input = [
    'a/b',
    'a/b',
    'a/c',
    'a/d',
    'a/d/e',
    'h/b',
    'h/c',
];
const output = [
  {
    name: 'a',
    children: [
      { name: 'b' },
      { name: 'c' },
      {
        name: 'd',
        children: [
          { name: 'e' }
        ]
      }
    ]
  },
  {
    name: 'h',
    children: [
      { name: 'b' },
      { name: 'c' },
      { name: 'd' }
    ]
  }
]
let out = []
function inToOut(input){
    for(let i = 0; i<input.length;i++){
    	let [f,...s] = input[i].split('/')
            out.push({
              name:f,
              children:s.length>0?inToOut(s):undefined
            })
    }
	return out
}
console.log(inToOut(input))