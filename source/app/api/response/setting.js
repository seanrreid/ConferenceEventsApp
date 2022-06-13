import {Images} from '@config';
import * as Utils from '@utils';

export const getSetting = async ({params}) => {
  await Utils.delay(1000);
  return {
    success: true,
    data: {
      categories: [
        {
          color: '#a569bd',
          description: '',
          featured_image: '10',
          icon: 'fas fa-calendar-alt',
          image: {
            full: {url: Images.service4},
            thump: {url: Images.service4},
          },
          name: 'Events',
          taxonomy: 'listar_category',
          term_id: 5,
          term_taxonomy_id: 5,
          url: 'http://listar.passionui.com/listar-category/events/',
          count: 10,
        },
        {
          color: '#f25ec0',
          description: '',
          featured_image: '7',
          icon: 'far fa-handshake',
          image: {
            full: {url: Images.category3},
            thump: {url: Images.category3},
          },
          name: 'Business',
          taxonomy: 'listar_category',
          term_id: 3,
          term_taxonomy_id: 3,
          url: 'http://listar.passionui.com/listar-category/business/',
          count: 10,
        },
        {
          color: '#5d6d7e',
          description: '',
          featured_image: '46',
          icon: 'fas fa-edit',
          image: {
            full: {url: Images.location4},
            thump: {url: Images.location4},
          },
          name: 'Arts',
          taxonomy: 'listar_category',
          term_id: 45,
          term_taxonomy_id: 45,
          url: 'http://listar.passionui.com/listar-category/arts/',
          count: 10,
        },
        {
          color: '#58d68d',
          description: '',
          featured_image: '28',
          icon: 'fas fa-heartbeat',
          image: {
            full: {url: Images.food3},
            thump: {url: Images.food3},
          },
          name: 'Health',
          taxonomy: 'listar_category',
          term_id: 42,
          term_taxonomy_id: 42,
          url: 'http://listar.passionui.com/listar-category/health/',
          count: 10,
        },
      ],
      features: [
        {
          term_id: 12,
          name: 'Credit Cards',
          slug: 'credit-cards',
          term_group: 0,
          term_taxonomy_id: 12,
          taxonomy: 'listar_feature',
          description: '',
          parent: 0,
          count: 65,
          filter: 'raw',
          featured_image: '',
          icon: 'far fa-credit-card',
          color: '#a569bd',
        },
        {
          term_id: 13,
          name: 'Delivery',
          slug: 'delivery',
          term_group: 0,
          term_taxonomy_id: 13,
          taxonomy: 'listar_feature',
          description: '',
          parent: 0,
          count: 148,
          filter: 'raw',
          featured_image: '',
          icon: 'fas fa-bicycle',
          color: '#e5634d',
        },
        {
          term_id: 15,
          name: 'Dogs Allowed',
          slug: 'dogs-allowed',
          term_group: 0,
          term_taxonomy_id: 15,
          taxonomy: 'listar_feature',
          description: '',
          parent: 0,
          count: 218,
          filter: 'raw',
          featured_image: '',
          icon: 'fas fa-paw',
          color: '#e5634d',
        },
        {
          term_id: 16,
          name: 'Free Parking',
          slug: 'free-parking',
          term_group: 0,
          term_taxonomy_id: 16,
          taxonomy: 'listar_feature',
          description: '',
          parent: 0,
          count: 301,
          filter: 'raw',
          featured_image: '',
          icon: 'fas fa-parking',
          color: '#e5634d',
        },
        {
          term_id: 17,
          name: 'Free Wifi',
          slug: 'free-wifi',
          term_group: 0,
          term_taxonomy_id: 17,
          taxonomy: 'listar_feature',
          description: '',
          parent: 0,
          count: 375,
          filter: 'raw',
          featured_image: '',
          icon: 'fas fa-wifi',
          color: '#e5634d',
        },
        {
          term_id: 14,
          name: 'Good for Kids',
          slug: 'good-for-kids',
          term_group: 0,
          term_taxonomy_id: 14,
          taxonomy: 'listar_feature',
          description: '',
          parent: 0,
          count: 441,
          filter: 'raw',
          featured_image: '',
          icon: 'fas fa-users',
          color: '#e5634d',
        },
        {
          term_id: 70,
          name: 'Karaoke',
          slug: 'karaoke',
          term_group: 0,
          term_taxonomy_id: 70,
          taxonomy: 'listar_feature',
          description: '',
          parent: 0,
          count: 508,
          filter: 'raw',
          featured_image: '',
          icon: 'fas fa-microphone',
          color: '#5d6d7e',
        },
        {
          term_id: 69,
          name: 'Outdoor Seating',
          slug: 'outdoor-seating',
          term_group: 0,
          term_taxonomy_id: 69,
          taxonomy: 'listar_feature',
          description: '',
          parent: 0,
          count: 560,
          filter: 'raw',
          featured_image: '',
          icon: 'fas fa-cloud',
          color: '#3c5a99',
        },
        {
          term_id: 11,
          name: 'Reservations',
          slug: 'reservations',
          term_group: 0,
          term_taxonomy_id: 11,
          taxonomy: 'listar_feature',
          description: '',
          parent: 0,
          count: 614,
          filter: 'raw',
          featured_image: '',
          icon: 'fas fa-phone',
          color: '#e5634d',
        },
        {
          term_id: 19,
          name: 'Shower',
          slug: 'shower',
          term_group: 0,
          term_taxonomy_id: 19,
          taxonomy: 'listar_feature',
          description: '',
          parent: 0,
          count: 676,
          filter: 'raw',
          featured_image: '',
          icon: 'fas fa-shower',
          color: '#e5634d',
        },
        {
          term_id: 18,
          name: 'Smoking Allowed',
          slug: 'smoking-allowed',
          term_group: 0,
          term_taxonomy_id: 18,
          taxonomy: 'listar_feature',
          description: '',
          parent: 0,
          count: 700,
          filter: 'raw',
          featured_image: '',
          icon: 'fas fa-fire',
          color: '#e5634d',
        },
        {
          term_id: 68,
          name: 'Takes Reservations',
          slug: 'takes-reservations',
          term_group: 0,
          term_taxonomy_id: 68,
          taxonomy: 'listar_feature',
          description: '',
          parent: 0,
          count: 706,
          filter: 'raw',
          featured_image: '',
          icon: 'fas fa-phone',
          color: '#5dade2',
        },
      ],
      locations: [
        {
          description: '',
          featured_image: '54',
          image: {
            full: {url: Images.place1},
            thump: {url: Images.place1},
          },
          name: 'Alabama',
          taxonomy: 'listar_location',
          term_id: 21,
          term_taxonomy_id: 21,
          url: 'http://listar.passionui.com/listar-location/alabama/',
        },
        {
          description: '',
          featured_image: '55',
          image: {
            full: {url: Images.place2},
            thump: {url: Images.place2},
          },
          name: 'Alaska',
          taxonomy: 'listar_location',
          term_id: 22,
          term_taxonomy_id: 22,
          url: 'http://listar.passionui.com/listar-location/alaska/',
        },
        {
          description: '',
          featured_image: '56',
          image: {
            full: {url: Images.place3},
            thump: {url: Images.place3},
          },
          name: 'Arizona',
          taxonomy: 'listar_location',
          term_id: 23,
          term_taxonomy_id: 23,
          url: 'http://listar.passionui.com/listar-location/arizona/',
        },
        {
          description: '',
          featured_image: '57',
          image: {
            full: {url: Images.place4},
            thump: {url: Images.place4},
          },
          name: 'Arkansas',
          taxonomy: 'listar_location',
          term_id: 27,
          term_taxonomy_id: 27,
          url: 'http://listar.passionui.com/listar-location/arkansas/',
        },
        {
          description: '',
          featured_image: '58',
          image: {
            full: {url: Images.place5},
            thump: {url: Images.place5},
          },
          name: 'California',
          taxonomy: 'listar_location',
          term_id: 28,
          term_taxonomy_id: 28,
          url: 'http://listar.passionui.com/listar-location/california/',
        },
      ],
      settings: {
        per_page: 20,
        color_option: [
          '#E5634D',
          '#5DADE2',
          '#A569BD',
          '#58D68D',
          '#FDC60A',
          '#3C5A99',
          '#5D6D7E',
        ],
        unit_price: 'USD',
        price_min: 9,
        price_max: 99,
        time_min: '09:00',
        time_max: '18:00',
        list_mode: 'list',
      },
      place_sort_option: [
        {
          title: 'Lastest Post',
          field: 'post_date',
          lang_key: 'post_date_desc',
          value: 'DESC',
        },
        {
          title: 'Oldest Post',
          field: 'post_date',
          lang_key: 'post_date_asc',
          value: 'ASC',
        },
        {
          title: 'Most Views',
          field: 'comment_count',
          lang_key: 'comment_count_desc',
          value: 'DESC',
        },
      ],
    },
  };
};
