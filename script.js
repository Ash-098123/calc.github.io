        let m = 0;
        let n = 0;
        let o = 0;
        let r = 0;
        let c_2 = 0;
        let c_1 = 0;
        
        //Binding Keys to the document
        document.addEventListener("keydown", function (event)
        {
            switch(event.key)
            {
                case "1":
                    document.getElementById('Main-Bar').value += 1;
                    break;
                case "2":
                    document.getElementById('Main-Bar').value += 2;
                    break;
                case "3":
                    document.getElementById('Main-Bar').value += 3;
                    break;
                case "4":
                    document.getElementById('Main-Bar').value += 4;
                    break;
                case "5":
                    document.getElementById('Main-Bar').value += 5;
                    break;
                case "6":
                    document.getElementById('Main-Bar').value += 6;
                    break;
                case "7":
                    document.getElementById('Main-Bar').value += 7;
                    break;
                case "8":
                    document.getElementById('Main-Bar').value += 8;
                    break;
                case "9":
                    document.getElementById('Main-Bar').value += 9;
                    break;
                case "0":
                    document.getElementById('Main-Bar').value += 0;
                    break;
                case "Backspace":
                    document.getElementById('Main-Bar').value = null;
                    break;
                case "F5":
                    document.refresh();
                    break;
                case "+":
                    cal(' +', 1);
                    break;
                case "-":
                    cal(' -', 2);
                    break;
                case "Delete":
                    c_1 = 0;
                    c_2 = 0;
                    o = 0;
                    m = 0;
                    n = 0;
                    r = 0;
                    document.getElementById('Main-Bar').value = null;
                    document.getElementById('His-Bar').value = null;
                    break;
                case "Enter":
                    equal();
                    break;
                case ".":
                    dot();
                    break;
                default:
                    break;
            }
            event.preventDefault();
        }),true;

        //Code for AC key, same code is binded to Backspace Key
        function ac()
        {
            document.getElementById('Main-Bar').value = null;
        }

        //Code for C key, same code is binded to Delete Key
        function c()
        { 
            c_1 = 0;
            c_2 = 0;
            o = 0;
            m = 0;
            n = 0;
            r = 0;
            document.getElementById('Main-Bar').value = null;
            document.getElementById('His-Bar').value = null;
        }

        //Code for Operations + - × ÷
        function cal(op, og)
        {
            if(document.getElementById('Main-Bar').value == 0)
            {
                swal({
                    title: "Attention",
                    text: "Value Cannot be Null or Zero",
                    icon: "error",
                    button: "OK",
                  });
                document.getElementById('Main-Bar').value = null;
            }
            else
            {
                if(o == 5 && c_2 == 0)
                {
                n = document.getElementById('Main-Bar').value;
                m = parseFloat(m);
                n = parseFloat(n);
                r = 1;
                for(var i = 0; i < n; i++)
                {
                    r *=m;
                }
                document.getElementById('His-Bar').value = m + op;
                document.getElementById('Main-Bar').value = r;
                }
                if(o == 4 && c_2 == 0)
                {
                n = document.getElementById('Main-Bar').value;
                m = parseFloat(m);
                n = parseFloat(n);
                r = m / n;
                if(r.toString().length > 10)
                {
                    r = r.toFixed(10);
                }
                document.getElementById('His-Bar').value = m + op;
                document.getElementById('Main-Bar').value = r;
                }
                if(o == 3 && c_2 == 0)
                {
                n = document.getElementById('Main-Bar').value;
                m = parseFloat(m);
                n = parseFloat(n);
                r = m * n;
                if(r.toString().length > 10)
                {
                    r = r.toFixed(10);
                }
                document.getElementById('His-Bar').value = m + op;
                document.getElementById('Main-Bar').value = r;
                }
                if(o == 2 && c_2 == 0)
                {
                n = document.getElementById('Main-Bar').value;
                m = parseFloat(m);
                n = parseFloat(n);
                r = m - n;
                if(r.toString().length > 10)
                {
                    r = r.toFixed(10);
                }
                document.getElementById('His-Bar').value = m + op;
                document.getElementById('Main-Bar').value = r;
                }
                if(o == 1 && c_2 == 0)
                {
                n = document.getElementById('Main-Bar').value;
                m = parseFloat(m);
                n = parseFloat(n);
                r = m + n;
                if(r.toString().length > 10)
                {
                    r = r.toFixed(10);
                }
                document.getElementById('His-Bar').value = m + op;
                document.getElementById('Main-Bar').value = r;
                }
                if(document.getElementById('Main-Bar').value == r)
                {
                document.getElementById('His-Bar').value = r + op;
                }
            o = og;
            c_2 = 0;
            m = document.getElementById('Main-Bar').value;
            document.getElementById('His-Bar').value = m + op;
            document.getElementById('Main-Bar').value = null;
            }
        }
        
        //Code for Equal Key, Same code is binded to Enter Key
        function equal()
        {
            c_2++;
            if(c_2 == 1)
            {
                
                n = document.getElementById('Main-Bar').value;
                m = parseFloat(m);
                n = parseFloat(n);
            switch(o)
            {
                case 1:
                    r = m + n;
                    if(r.toString().length > 10)
                    {
                        r = r.toFixed(10);
                    }
                    document.getElementById('His-Bar').value = m + " + " + n + " = ";
                    document.getElementById('Main-Bar').value = r;
                    break;
                case 2:
                    r = m - n;
                    if(r.toString().length > 10)
                    {
                        r = r.toFixed(10);
                    }
                    document.getElementById('His-Bar').value = m + " - " + n + " = ";
                    document.getElementById('Main-Bar').value = r;
                    break;
                case 3:
                    r = m * n;
                    if(r.toString().length > 10)
                    {
                        r = r.toFixed(10);
                    }
                    document.getElementById('His-Bar').value = m + " × " + n + " = ";
                    document.getElementById('Main-Bar').value = r;
                    break;
                case 4:
                    r = m / n;
                    if(r.toString().length > 10)
                    {
                        r = r.toFixed(10);
                    }
                    document.getElementById('His-Bar').value = m + " ÷ " + n + " = ";
                    document.getElementById('Main-Bar').value = r;
                    break;
                case 5:
                    r = 1;
                    for(var i = 0; i < n; i++)
                    {
                        r *= m;
                    }
                    if(r.toString().length > 10)
                    {
                        r = r.toFixed(10);
                    }
                    document.getElementById('His-Bar').value = m + " ^ " + n + " = ";
                    document.getElementById('Main-Bar').value = r;
                default:
                    break;
            }
            }
        }
        function dot()
        {
            if(document.getElementById('Main-Bar').value == r)
            {
                document.getElementById('Main-Bar').value = 0;
            }
            if(!document.getElementById('Main-Bar').value.toString().includes('.'))
            {
                document.getElementById('Main-Bar').value += ".";
            }
        }