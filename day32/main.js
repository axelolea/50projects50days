const goodSwitch = document.getElementById('good')
const cheapSwitch = document.getElementById('cheap')
const fastSwitch = document.getElementById('fast')

const switches = document.querySelectorAll('.hidden-input')

switches.forEach( switchEle => switchEle.addEventListener('change', e => doTheTrick(e.target)) )

const titleTab = document.title

const doTheTrick = el => {
    if( goodSwitch.checked &&
        cheapSwitch.checked  &&
        fastSwitch.checked )
    {
        document.title = titleTab + ' ???'
        if(el.id == 'good')
        {
            fastSwitch.checked = false
        }
        else if (el.id == 'cheap')
        {
            goodSwitch.checked = false
        }
        else
        {
            cheapSwitch.checked = false
        }
    }
}