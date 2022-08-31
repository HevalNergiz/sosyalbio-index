var formParent = $('.formici').parent();

		var extend = $('.extend').parent();

		$('.addmore').click(function(e){
		  e.preventDefault();
		  var num = $('.cloned-input').length;
		  var newNum  = new Number(num + 1);
		  var newInput = extend.clone().attr('id', 'clone' + newNum);
		  var id = newInput.prop("id");

		  $('.formici').append(newInput);
			  newInput.append( '<button class="delete btn btn-light benimbutton-light mt-2" type="" value="">Sil</button><br>' );
			});

		$('form').on('click', '.cloned-input .delete', function(e){
		  e.preventDefault();
		  var element = $(this).closest("div").prop("id");
		  $('#'+element).remove();
		});