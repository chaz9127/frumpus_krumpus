class Comic < ApplicationRecord
  has_attached_file :image,
    default_url: '',
    path: "public/files/images/comics/:style/:basename",
    url: "/files/images/comics/:style/:basename"
  validates :image,
      attachment_content_type: { content_type: /\Aimage\/.*\Z/ },
      attachment_size: { less_than: 2.megabytes }

  def serialized
    {
      id: id,
      title: title,
      comic_number: comic_number,
      image_url: image.url,
      created_at: created_at,
      updated_at: updated_at
    }
  end
end
