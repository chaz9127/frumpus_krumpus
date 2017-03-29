ActiveAdmin.register Comic do
 config.sort_order = 'issue_number_desc'

  controller do
    def permitted_params
      params.permit comic: [:title, :issue_number, :image]
    end
  end

  index do
    column :title
    column :issue_number
    column :created_at
    actions
  end

  filter :title
  filter :issue_number
  filter :created_at

  form do |f|
    f.inputs "Comic Details" do
      f.input :title
      f.input :issue_number
      f.input :image, as: :file
    end
    f.actions
  end

  show do |comic|
    attributes_table do
      row :issue_number
      row :title
      row :link do
        link_to "/comic/#{comic.slug}", "/comic/#{comic.slug}"
      end
      row :image do
        tag("img", src: comic.image.url)
      end
    end
  end

end
