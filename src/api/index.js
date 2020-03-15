import request from "@/utils/request"

export const apiSearch = (k) => request({
  url: '/search',
  params: {k},
  method: 'get'
})

export const apiInfo = (detail_url, source) => request({
  url: '/info',
  params: {
    detail_url,
    source
  },
  method: 'get'
})

export const apiChapters = (detail_url, source) => request({
  url: '/chapters',
  params: {
    detail_url,
    source
  },
  method: 'get'
})

export const apiContent = (detail_url, chapter_url, source) => request({
  url: '/read',
  params: {
    detail_url,
    chapter_url,
    source
  },
  method: 'get'
})
