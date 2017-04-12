# Welcome to Frumpus Krumpus

## Tech Stack
- Ruby - v5.0.1
- Rails - v2.3.0
- Angular - v1.5.3

# Development

## Scaffold new page
1. Add route to `config/routes.rb`.
- Add controller to `app/controllers`
- Add view to `app/views/` and include:
```html
    <div ui-view="" class="container"></div>
  ```
- Add Angular Controller to `app/assets/javascripts/angular/controllers/`
- Add template to `app/assets/templates/`
  - make sure to precede the file name with an underscore e.g. `_foobar.html`
- Add state to `app/assets/javascripts/angular/main.js`
