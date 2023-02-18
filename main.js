(() => {
  console.log('JS is running');

  //   toggle button container element
  const toggleBtn1 = document.querySelector('.toggle-btn-1');
  const toggleBtn2 = document.querySelector('.toggle-btn-2');
  const toggleBtn3 = document.querySelector('.toggle-btn-3');

  //   toggle button lines
  const toggle_btn_lines_1 = document.querySelectorAll('.toggle-btn-1-line'); //belongs to toggle button one
  const toggle_btn_lines_2 = document.querySelectorAll('.toggle-btn-2-line'); //button two
  const toggle_btn_lines_3 = document.querySelectorAll('.toggle-btn-3-line'); //button three

  let toggle1, toggle2, toggle3; //keep the track of toggling of button1 , button2 and button3

  //callable when mouse is over the button container
  const onMouseOver = (toggle_btn_lines) => {
    toggle_btn_lines.forEach((line) => {
        // remove dull color from lines 
      line.classList.remove('dull');
    //   and add different color as condition matches
      if (line.classList.contains('toggle-btn-1-line')) { //if class list has toggle-btn-1-line class it will add green class to element
        line.classList.add('green');
      }
      if (line.classList.contains('toggle-btn-2-line')) { //and so on.
        line.classList.add('red');
      }
      if (line.classList.contains('toggle-btn-3-line')) {
        line.classList.add('vanilla');
      }
    });
  };

//   callable when mouse leaves the container
  const onMouseLeave = (toggle_btn_lines) => {
    toggle_btn_lines.forEach((line) => {
      line.classList.remove('green');
      line.classList.remove('red');
      line.classList.remove('vanilla');
      line.classList.add('dull');
    });
  };

  //animate toggle button one
  const toggle_btn_1 = (lines) => {
    const default_style = null;

    if (!toggle1) {
      toggle1 = true; //if not pressed then set true
      lines[0].style.top = '50%';
      lines[0].style.transform = 'translateX(-50%) rotate(45deg)';
      lines[1].style.width = '100px';
      lines[1].style.transform = 'translateX(-115%)';
      lines[1].style.background = 'rgba(255,255,255,0)';
      lines[2].style.top = '50%';
      lines[2].style.transform = 'translateX(-50%) rotate(-45deg)';
    } else {
      toggle1 = false; //if pressed then set false
      lines.forEach((line) => (line.style = default_style)); //restore line styles
    }
  };

  //animate toggle button two
  const toggle_btn_2 = (lines) => {
    const default_style = null;

    if (!toggle2) {
      toggle2 = true;
      lines[0].style.top = '50%';
      lines[0].style.transform = 'translateX(-50%) rotate(45deg)';
      lines[1].style.width = '50%';
      lines[1].style.left = '-30%';
      lines[1].style.transform = 'rotate(90deg)';
      lines[2].style.top = '50%';
      lines[2].style.transform = 'translateX(-50%) rotate(-45deg)';
    } else {
      toggle2 = false;
      lines.forEach((line) => (line.style = default_style));
    }
  };

  //animate toggle button three
  const toggle_btn_3 = (lines) => {
    const default_style = null;

    if (!toggle3) {
      toggle3 = true;
      lines[0].style.top = '50%';
      lines[0].style.transform = 'translateX(-50%) rotate(135deg)';
      lines[1].style.background = 'rgba(0,0,0,0)';
      lines[2].style.top = '50%';
      lines[2].style.transform = 'translateX(-50%) rotate(-135deg)';
    } else {
      toggle3 = false;
      lines.forEach((line) => (line.style = default_style));
    }
  };

  toggleBtn1.addEventListener('mouseover', () =>
    onMouseOver(toggle_btn_lines_1)
  );
  toggleBtn1.addEventListener('mouseleave', () =>
    onMouseLeave(toggle_btn_lines_1)
  );
  toggleBtn1.addEventListener('click', () => toggle_btn_1(toggle_btn_lines_1));

  toggleBtn2.addEventListener('mouseover', () =>
    onMouseOver(toggle_btn_lines_2)
  );
  toggleBtn2.addEventListener('mouseleave', () =>
    onMouseLeave(toggle_btn_lines_2)
  );
  toggleBtn2.addEventListener('click', () => toggle_btn_2(toggle_btn_lines_2));

  toggleBtn3.addEventListener('mouseover', () =>
    onMouseOver(toggle_btn_lines_3)
  );
  toggleBtn3.addEventListener('mouseleave', () =>
    onMouseLeave(toggle_btn_lines_3)
  );
  toggleBtn3.addEventListener('click', () => toggle_btn_3(toggle_btn_lines_3));
})();
