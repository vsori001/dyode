# Dyode Liquid Challenge Answers
1. One way you can make a line of text editable in the homepage section is by going into the theme and clicking **Actions** > **Edit Code**. Let's say the section you wanted to edit was in the header, you could look for the **Sections** group in the sidebar and search for a file named `header.liquid` or something similar. From here you can look for the line you want to edit in liquid and save when finished.
2. I would navigate to the theme and under **Sections** look for the collection template. In that file, I would look for the hero or header area and add this line: `{{ collection.featured_image }}`
3. 
```
<div>
{% paginate collection.products by 5 %}
  ...
{% endpaginate %}
</div>
```
4. 
```
{% 
  assign blueShirt = all_products["Blue T-Shirt"] 
  assign id = blueShirt.id
  assign title = blueShirt.title
  assign handle = blueShirt.handle
  assign price = blueShirt.price
  assign url = blueShirt.url
  assign image = blueShirt.featured_image
%}
```
5. 
```{%
  assign items = [
    {
      key: "fruit",
      value: "apple"
    }, 
    {
      key: "vegetable",
      value: "carrot"
    }, 
    {
      key: "cloth",
      value: "t-shirt"
    }, 
    {
      key: "denim",
      value: "jeans"
    }
  ]
%}

{% for item in items %}
  {% assign item.key = item.value %}
{% endfor %}
```
# FrontEnd Challenge
Landing page preview: https://nostalgic-heyrovsky-9e53e4.netlify.app
