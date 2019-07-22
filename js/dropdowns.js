  var d=new Date();
  var month = d.getMonth()+1;
  var day = d.getDate();
  var output = d.getFullYear() + '/' + (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day;

  $("input:radio[name='Conferences']").change(function(){
    change_options();
  })

  $("#country").change(function(){
    change_options();
  })

  function change_options()
  {
    var country = $("#country").countrySelect("getSelectedCountryData");
    code= country.iso2;
    var access=$("input:radio[name='Conferences']:checked").val();
    var sel=document.getElementById("price");
    $(sel).empty();
    if(code=="pe")
    {
      if (access=="ALL")
      {
        if((month==08 && day<=10) || month<8)
        {
          var opt=document.createElement("option");
          opt.text="Professional from Peru $144";
          opt.value=144;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student from Peru $104";
          opt.value=104;
          sel.add(opt);
        }
        else if(month<=10)
        {
          var opt=document.createElement("option");
          opt.text="Professional from Peru $189";
          opt.value=189;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student from Peru $140";
          opt.value=140;
          sel.add(opt);
        }
        else if (mont==11 && day <=15)
        {
          var opt=document.createElement("option");
          opt.text="Professional from Peru $212";
          opt.value=212;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student from Peru $162";
          opt.value=162;
          sel.add(opt);
        }
      }
      else if (access=="IFIP")
      {
        if((month==08 && day<=10) || month<8)
        {
          var opt=document.createElement("option");
          opt.text="Professional from Peru $90";
          opt.value=90;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student from Peru $50";
          opt.value=50;
          sel.add(opt);
        }
        else if(month<=10)
        {
          var opt=document.createElement("option");
          opt.text="Professional from Peru $108";
          opt.value=108;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student from Peru $59";
          opt.value=59;
          sel.add(opt);
        }
        else if (mont==11 && day <=15)
        {
          var opt=document.createElement("option");
          opt.text="Professional from Peru $117.5";
          opt.value=117.5;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student from Peru $67.5";
          opt.value=67.5;
          sel.add(opt);
        }
      }
      else if(access=="COIDEV")
      {
        if((month==08 && day<=10) || month<8)
        {
          var opt=document.createElement("option");
          opt.text="Professional from Peru $54";
          opt.value=54;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student from Peru $54";
          opt.value=54;
          sel.add(opt);
        }
        else if(month<=10)
        {
          var opt=document.createElement("option");
          opt.text="Professional from Peru $81";
          opt.value=81;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student from Peru $81";
          opt.value=81;
          sel.add(opt);
        }
        else if (mont==11 && day <=15)
        {
          var opt=document.createElement("option");
          opt.text="Professional from Peru $94.5";
          opt.value=94.5;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student from Peru $94.5";
          opt.value=94.5;
          sel.add(opt);
        }
      }
    }
    else
    {
      if (access=="ALL")
      {
        if((month==08 && day<=10) || month<8)
        {
          var opt=document.createElement("option");
          opt.text="Professional IFIP member $378";
          opt.value=378;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Professional non member $495";
          opt.value=495;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student IFIP member $144";
          opt.value=144;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student non member $171";
          opt.value=171;
          sel.add(opt);
        }
        else if(month<=10)
        {
          var opt=document.createElement("option");
          opt.text="Professional IFIP member $450";
          opt.value=450;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Professional non member $567";
          opt.value=567;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student IFIP member $194";
          opt.value=194;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student non member $212";
          opt.value=212;
          sel.add(opt);
        }
        else if (mont==11 && day <=15)
        {
          var opt=document.createElement("option");
          opt.text="Professional IFIP member $504";
          opt.value=504;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Professional non member $630";
          opt.value=630;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student IFIP member $225";
          opt.value=225;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student non member $243";
          opt.value=243;
          sel.add(opt);
        }
      }
      else if (access=="IFIP")
      {
        if((month==08 && day<=10) || month<8)
        {
          var opt=document.createElement("option");
          opt.text="Professional IFIP member $270";
          opt.value=270;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Professional non member $360";
          opt.value=360;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student IFIP member $90";
          opt.value=90;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student non member $108";
          opt.value=108;
          sel.add(opt);
        }
        else if(month<=10)
        {
          var opt=document.createElement("option");
          opt.text="Professional IFIP member $315";
          opt.value=315;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Professional non member $405";
          opt.value=405;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student IFIP member $113";
          opt.value=113;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student non member $122";
          opt.value=122;
          sel.add(opt);
        }
        else if (mont==11 && day <=15)
        {
          var opt=document.createElement("option");
          opt.text="Professional IFIP member $342";
          opt.value=342;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Professional non member $441";
          opt.value=441;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student IFIP member $126";
          opt.value=126;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student non member $135";
          opt.value=135;
          sel.add(opt);
        }
      }
      else if(access=="COIDEV")
      {
        if((month==08 && day<=10) || month<8)
        {
          var opt=document.createElement("option");
          opt.text="Professional IFIP member $108";
          opt.value=108;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Professional non member $135";
          opt.value=135;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student IFIP member $54";
          opt.value=54;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student non member $63";
          opt.value=63;
          sel.add(opt);
        }
        else if(month<=10)
        {
          var opt=document.createElement("option");
          opt.text="Professional IFIP member $135";
          opt.value=135;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Professional non member $162";
          opt.value=162;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student IFIP member $81";
          opt.value=81;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student non member $90";
          opt.value=90;
          sel.add(opt);
        }
        else if (mont==11 && day <=15)
        {
          var opt=document.createElement("option");
          opt.text="Professional IFIP member $162";
          opt.value=162;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Professional non member $189";
          opt.value=189;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student IFIP member $99";
          opt.value=99;
          sel.add(opt);
          var opt=document.createElement("option");
          opt.text="Student non member $108";
          opt.value=108;
          sel.add(opt);
        }
      }
    }
  }
