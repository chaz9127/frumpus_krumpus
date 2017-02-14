class Comic < ApplicationRecord
  has_attached_file :image,
    default_url: ''
  validates :image,
      attachment_content_type: { content_type: /\Aimage\/.*\Z/ },
      attachment_size: { less_than: 2.megabytes }
end
