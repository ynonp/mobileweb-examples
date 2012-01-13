require 'sinatra'
set :public_folder, File.dirname(__FILE__)

page = <<-eos
    <html>
      <head>
        <title>Fruits Party</title>
      </head>

      <body>
        <div id="content-wrapper">
          <a href="<%= @prev_url %>">Previous</a>
          <img src="<%= @image_name %>" alt="<%= @image_desc %>" width="300" height="300" />
          <a href="<%= @next_url %>">Next</a>
        </div>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script src="ajaxify.js"></script>
      </body>

    </html>
  eos

get '/apple' do
  @image_name = 'img/apple.jpg'
  @image_desc = 'A juicy apple'
  @next_url   = "watermelon"
  @prev_url   = "banana"
  erb page
end

get '/watermelon' do
  @next_url   = "banana"
  @prev_url   = "apple"
  @image_name = 'img/wm.jpg'
  @image_desc = 'A juicy watermelon'
  erb page
end

get '/banana' do
  @next_url   = "apple"
  @prev_url   = "watermelon"
  @image_name = 'img/banana.jpg'
  @image_desc = 'A yellow banana'
  erb page
end
