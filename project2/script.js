let data = [
    {
    Name: 'mateo',
    age: '30',
    },
    {
        Name: 'Sarah',
        age: '30',
        },
        {
            Name: 'John',
            age: '30',
            },
            {
                Name: 'Tim',
                age: '30',
                },
                {
                    Name: 'Sam',
                    age: '30',
                    },
                    {
                        Name: 'Joey',
                        age: '30',
                        }
];
const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.Name + ' ' + 'is' + item.age + ' years old ' + '</div>';
});

info.innerHTML = details.join('\n');