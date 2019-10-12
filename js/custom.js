//assignment

$(document).ready(function() {
  // Select
  // 1. Select all of the div elements that have a class of "module".
  $(".js-select_1").on("click", function() {
    $(".module").toggleClass("selected");
  });

  //2.Come up with three selectors that you could use to get the third item in the #myList unordered list. Which is the best to use? Why?
  $(".js-list-type-1-btn").on("click", function() {
    $("#myList ul li")
      .eq(2)
      .css("background", "red");
    //   $("#myList ul li:nth-child(3)").css("background", "red");
    //   $("ul li:nth-of-type(2)").css("color", "green");
  });

  //3.Select the label for the search input using an attribute selector.
  $(".js-search-btn").on("click", function() {
    $(".show-search-label").html(
      `<strong>The label of search box is: </strong>  ${$("#input-search").attr(
        "aria-label"
      )}`
    );
  });

  //4.Figure out how many elements on the page are hidden
  $(".js-input-hidden-btn").on("click", function() {
    $(".show-hidden-input-count").html(
      `<strong>The Hidden Input count is: </strong>   ${
        $("input[type=hidden]").length
      }`
    );
  });

  //5. Figure out how many image elements on the page have an alt attribute.
  $(".js-image-alt").on("click", function() {
    $(".show-image-alt-count").html(
      `<strong>Images that have ALT there count is: </strong>   ${
        $("img[alt]").length
      }`
    );
  });

  //6.Select all of the odd table rows in the table body
  $(".js-odd-rows").on("click", function() {
    $("tr:odd").css("background-color", "#bbbbff");
  });

  //Traversing
  //1.Select all of the image elements on the page, log each image's alt attribute.
  $(".js-image-alt-val").on("click", function() {
    $(".show-image-alt-val").html(
      $("img").each(function() {
        console.log($(this).attr("alt"));
      })
    );
  });

  //2.Select the search input text box, then traverse up to the form and add a class to the form.
  $(".js-search-form").on("click", function() {
    $("#input-search-2")
      .parent("form")
      .addClass("test");
    alert("class Added to form");
  });

  //3.Select the list item inside #myList that has a class of "current" and remove that class from it; add aclass of "current" to the next list item.
  $(".js-select-next").on("click", function() {
    $("#myList2")
      .find(".current")
      .removeClass("current")
      .next()
      .addClass("current");
  });

  //Manipulating
  //1.Add five new list items to the end of the unordered list #myList.
  $(".js-add-list-items").on("click", function() {
    for (let i = 0; i <= 5; i++) {
      $("#myList3").append(
        '<li class="list-items px-2 py-2 my-2 current"></li>'
      );
    }
  });

  //2.Permanently remove the odd list items from #myList.
  $("#myList4 li:odd").css("background", "yellow");
  $(".js-remove-odds").on("click", function() {
    $("#myList4 li:odd").remove();
  });

  //3.Add another h2 and another paragraph to the last div.module.
  $(".js-add-elements-lDiv").on("click", function() {
    $(".module1")
      .last()
      .append("<h2>H2</h2><p>P</p>");
  });

  // 4.Add another option to the select element; give the option the value "wednesday", and inner HTML of "Wednesday".
  $(".js-add-Wednesday").on("click", function() {
    $('option[value="Wednesday"]').remove();
    $(".custom-select").append('<option value="Wednesday">Wednesday</option>');
  });

  /////////////// tabbed navigation
  let textForTabs = [];
  $(".js-tab-start").on("click", function() {
    $(".div-module").map(function() {
      textForTabs.push(
        $(this)
          .find("h2")
          .text()
      );
    });
    $(".nav-item").text(index => textForTabs[index]);
    $(".nav-item").on("click", function() {
      $(".nav-item").removeClass("active");
      $(this).addClass("active");
      $(".div-module").hide();
      if ($(this).hasClass("tab-2")) {
        $(".tab-2-data").show();
      }
      if ($(this).hasClass("tab-1")) {
        $(".tab-1-data").show();
      }
    });
  });
  $(".tab-1-data").show();
});
