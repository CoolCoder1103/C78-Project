var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg","https://thumb.ac-illust.com/0b/0b1668d02c4cc80a83cf64378c86ea10_t.jpeg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://classroomclipart.com/image/static7/preview2/smiling-young-wears-tee-shirt-sneakers-and-jeans-60153.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg"];
var names = ["Family Book","Mukesh Modi", "Malti Modi", "Kunal Modi", "Shaily Modi", "Jai Modi", "Ansh Modi"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;

    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
