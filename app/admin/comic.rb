ActiveAdmin.register Comic do

  controller do
    def permitted_params
      params.permit comic: [:title, :comic_number, :image]
    end
  end

  index do
    column :title
    column :comic_number
    column :created_at
    actions
  end

  filter :title
  filter :comic_number
  filter :created_at

  form do |f|
    f.inputs "Comic Details" do
      f.input :title
      f.input :comic_number
      f.input :image, as: :file
    end
    f.actions
  end

  show do |comic|
    attributes_table do
      row :comic_number
      row :title
      row :image do
        image_tag(comic.image.url)
      end
    end
  end

end
