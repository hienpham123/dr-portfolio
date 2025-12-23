export type Language = 'vi' | 'en'

export const translations = {
  vi: {
    nav: {
      home: 'Trang Chủ',
      about: 'Giới Thiệu',
      services: 'Dịch Vụ',
      marketing: 'Marketing',
      experience: 'Kinh Nghiệm',
      contact: 'Liên Hệ',
    },
    hero: {
      badge: 'Bác Sĩ Chuyên Khoa',
      title: 'Bác Sĩ',
      titleHighlight: 'Quách Thùy Linh',
      description:
        'Với nhiều năm kinh nghiệm trong lĩnh vực y tế, tôi cam kết mang đến dịch vụ chăm sóc sức khỏe chất lượng cao và tận tâm cho mọi bệnh nhân.',
      appointment: 'Lịch hẹn linh hoạt',
      support: '24/7 Tư vấn',
      locations: 'Nhiều địa điểm',
      bookAppointment: 'Đặt Lịch Hẹn',
      learnMore: 'Tìm Hiểu Thêm',
      yearsExperience: 'Năm Kinh Nghiệm',
      patients: 'Bệnh Nhân',
      satisfaction: 'Hài Lòng',
      support24: 'Hỗ Trợ',
    },
    about: {
      title: 'Về Tôi',
      subtitle:
        'Với niềm đam mê và cam kết không ngừng trong việc chăm sóc sức khỏe cộng đồng',
      name: 'Bác Sĩ Quách Thùy Linh',
      role: 'Bác Sĩ Chuyên Khoa',
      description1:
        'Với hơn 15 năm kinh nghiệm trong lĩnh vực y tế, tôi đã điều trị thành công hàng nghìn bệnh nhân với các tình trạng sức khỏe khác nhau. Chuyên môn của tôi bao gồm chẩn đoán chính xác, điều trị hiệu quả và chăm sóc toàn diện.',
      description2:
        'Tôi tin rằng mỗi bệnh nhân đều xứng đáng được nhận sự chăm sóc tốt nhất. Phương pháp điều trị của tôi luôn được cá nhân hóa dựa trên nhu cầu và tình trạng cụ thể của từng người.',
      description3:
        'Ngoài công việc lâm sàng, tôi còn tham gia nghiên cứu và giảng dạy để chia sẻ kiến thức với thế hệ bác sĩ trẻ.',
      description4:
        'Với niềm đam mê marketing và truyền thông, tôi đã phát triển chuyên môn trong lĩnh vực content marketing y tế. Hiện tại, tôi đang phụ trách chiến lược marketing và content cho hệ thống y tế Mescells - đơn vị tiên phong về y học tái tạo và trị liệu tế bào tại Việt Nam.',
      achievements: {
        certification: {
          title: 'Chứng Chỉ Chuyên Khoa',
          description: 'Được công nhận bởi các tổ chức y tế hàng đầu',
        },
        education: {
          title: 'Giáo Dục Xuất Sắc',
          description: 'Tốt nghiệp từ các trường đại học y danh tiếng',
        },
        care: {
          title: 'Chăm Sóc Tận Tâm',
          description: 'Luôn đặt sức khỏe bệnh nhân lên hàng đầu',
        },
        team: {
          title: 'Đội Ngũ Chuyên Nghiệp',
          description: 'Làm việc với các chuyên gia hàng đầu',
        },
      },
      education: {
        title: 'Học Vấn & Chứng Chỉ',
        items: [
          {
            year: '2008',
            title: 'Bác Sĩ Y Khoa',
            institution: 'Đại Học Y Hà Nội',
          },
          {
            year: '2012',
            title: 'Chuyên Khoa I',
            institution: 'Bệnh Viện Bạch Mai',
          },
          {
            year: '2018',
            title: 'Chuyên Khoa II',
            institution: 'Học Viện Quân Y',
          },
        ],
      },
    },
    services: {
      title: 'Dịch Vụ Y Tế',
      subtitle: 'Các dịch vụ chăm sóc sức khỏe toàn diện và chuyên nghiệp',
      items: {
        general: {
          title: 'Khám Tổng Quát',
          description: 'Kiểm tra sức khỏe định kỳ và tư vấn về lối sống lành mạnh',
        },
        cardiology: {
          title: 'Tim Mạch',
          description: 'Chẩn đoán và điều trị các bệnh lý về tim mạch, huyết áp',
        },
        neurology: {
          title: 'Thần Kinh',
          description: 'Điều trị các rối loạn thần kinh và bệnh lý não bộ',
        },
        ophthalmology: {
          title: 'Mắt',
          description: 'Khám và điều trị các bệnh về mắt, phẫu thuật mắt',
        },
        pediatrics: {
          title: 'Nhi Khoa',
          description: 'Chăm sóc sức khỏe trẻ em từ sơ sinh đến tuổi vị thành niên',
        },
        endocrinology: {
          title: 'Nội Tiết',
          description: 'Điều trị các rối loạn nội tiết, tiểu đường, tuyến giáp',
        },
        lab: {
          title: 'Xét Nghiệm',
          description: 'Các xét nghiệm chẩn đoán chính xác và nhanh chóng',
        },
        pharmacy: {
          title: 'Tư Vấn Dược',
          description: 'Tư vấn về thuốc và liệu pháp điều trị phù hợp',
        },
        contentMarketing: {
          title: 'Content Marketing',
          description: 'Sáng tạo nội dung y tế, chiến lược marketing cho bệnh viện và phòng khám',
        },
        medicalWriting: {
          title: 'Medical Writing',
          description: 'Viết bài khoa học, báo cáo y tế và tài liệu chuyên môn',
        },
      },
    },
    marketing: {
      title: 'Marketing & Content',
      subtitle:
        'Kết hợp chuyên môn y tế với marketing để truyền tải thông điệp sức khỏe đến cộng đồng',
      servicesTitle: 'Dịch Vụ Marketing',
      projectsTitle: 'Dự Án Marketing Nổi Bật',
      services: {
        contentMarketing: {
          title: 'Content Marketing',
          description: 'Sáng tạo nội dung y tế chuyên sâu, dễ hiểu cho bệnh nhân và cộng đồng',
        },
        digitalMarketing: {
          title: 'Digital Marketing',
          description: 'Xây dựng chiến lược marketing số cho bệnh viện và phòng khám',
        },
        videoContent: {
          title: 'Video Content',
          description: 'Sản xuất video tư vấn sức khỏe, giới thiệu dịch vụ y tế chuyên nghiệp',
        },
        medicalWriting: {
          title: 'Medical Writing',
          description: 'Viết bài khoa học, báo cáo y tế và tài liệu chuyên môn',
        },
        analytics: {
          title: 'Marketing Analytics',
          description: 'Phân tích dữ liệu và đo lường hiệu quả chiến dịch marketing',
        },
        brandStrategy: {
          title: 'Brand Strategy',
          description: 'Xây dựng và phát triển thương hiệu y tế uy tín, chuyên nghiệp',
        },
      },
      projects: {
        mescells: {
          title: 'Content Marketing tại Mescells',
          organization: 'Hệ thống y tế Mescells',
          period: '2020 - Hiện tại',
          description:
            'Phụ trách chiến lược content marketing và digital marketing cho hệ thống y tế chuyên sâu về y học tái tạo và trị liệu tế bào',
          achievements: [
            'Xây dựng và quản lý nội dung website mescells.com',
            'Sáng tạo 200+ bài viết về công nghệ tế bào gốc',
            'Tăng trưởng traffic website 300% trong 2 năm',
            'Quản lý các kênh social media và community',
          ],
        },
        campaign: {
          title: 'Chiến Dịch Marketing Y Học Tái Tạo',
          organization: 'Mescells',
          period: '2021 - 2023',
          description:
            'Phát triển và thực hiện các chiến dịch marketing để nâng cao nhận thức về y học tái tạo và công nghệ tế bào gốc',
          achievements: [
            'Tổ chức 50+ hội thảo và sự kiện khoa học',
            'Hợp tác với các báo lớn: VTV, Tiền Phong, Sức Khỏe Đời Sống',
            'Xây dựng cộng đồng 10,000+ thành viên',
            'Đạt giải thưởng Marketing Xuất Sắc trong Y Tế',
          ],
        },
      },
      stats: {
        articles: 'Bài Viết Content',
        traffic: 'Tăng Trưởng Traffic',
        events: 'Sự Kiện & Hội Thảo',
        community: 'Cộng Đồng Online',
      },
    },
    experience: {
      title: 'Kinh Nghiệm Làm Việc',
      subtitle: 'Hành trình phát triển sự nghiệp trong lĩnh vực y tế',
      achievements: 'Thành Tựu:',
      items: [
        {
          year: '2020 - Hiện tại',
          position: 'Content & Marketing Manager',
          hospital: 'Hệ thống y tế Mescells',
          location: 'Hà Nội',
          description:
            'Phụ trách chiến lược content marketing và digital marketing cho hệ thống y tế chuyên sâu về y học tái tạo và trị liệu tế bào',
          achievements: [
            'Xây dựng và quản lý nội dung website mescells.com',
            'Sáng tạo 200+ bài viết về công nghệ tế bào gốc',
            'Tăng trưởng traffic website 300% trong 2 năm',
            'Quản lý các kênh social media và community',
          ],
        },
        {
          year: '2018 - Hiện tại',
          position: 'Bác Sĩ Trưởng Khoa',
          hospital: 'Bệnh Viện Đa Khoa Trung Ương',
          location: 'Hà Nội',
          description:
            'Quản lý và điều hành khoa, đào tạo bác sĩ trẻ, thực hiện các ca phẫu thuật phức tạp',
          achievements: [
            'Thực hiện hơn 1000 ca phẫu thuật thành công',
            'Đào tạo 50+ bác sĩ trẻ',
            'Nghiên cứu và công bố 20+ bài báo khoa học',
          ],
        },
        {
          year: '2012 - 2018',
          position: 'Bác Sĩ Chuyên Khoa',
          hospital: 'Bệnh Viện Bạch Mai',
          location: 'Hà Nội',
          description:
            'Chuyên điều trị các ca bệnh phức tạp, tham gia nghiên cứu lâm sàng',
          achievements: [
            'Điều trị thành công 5000+ bệnh nhân',
            'Tham gia 10+ dự án nghiên cứu',
            'Nhận giải thưởng Bác sĩ xuất sắc',
          ],
        },
        {
          year: '2008 - 2012',
          position: 'Bác Sĩ Nội Trú',
          hospital: 'Bệnh Viện Đại Học Y Hà Nội',
          location: 'Hà Nội',
          description:
            'Học tập và thực hành lâm sàng dưới sự hướng dẫn của các giáo sư đầu ngành',
          achievements: [
            'Hoàn thành chương trình nội trú xuất sắc',
            'Tham gia nhiều ca phẫu thuật phức tạp',
            'Đạt điểm cao trong các kỳ thi chuyên khoa',
          ],
        },
      ],
    },
    contact: {
      title: 'Liên Hệ',
      subtitle: 'Hãy liên hệ với chúng tôi để đặt lịch hẹn hoặc tư vấn',
      contactInfo: {
        title: 'Thông Tin Liên Hệ',
        description:
          'Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi qua bất kỳ phương thức nào dưới đây.',
        phone: {
          title: 'Điện Thoại',
          content: '+84 123 456 789',
        },
        email: {
          title: 'Email',
          content: 'info@quachthuylinh.com',
        },
        address: {
          title: 'Địa Chỉ',
          content: '21 Lê Văn Lương, Hà Nội',
        },
        hours: {
          title: 'Giờ Làm Việc',
          content: 'Thứ 2 - Thứ 6: 8:00 - 18:00',
        },
      },
      quickBooking: {
        title: 'Đặt Lịch Hẹn Nhanh',
        description:
          'Bạn có thể đặt lịch hẹn trực tuyến hoặc gọi điện để được tư vấn ngay.',
        button: 'Đặt Lịch Ngay',
      },
      form: {
        title: 'Gửi Tin Nhắn',
        name: 'Họ và Tên',
        namePlaceholder: 'Nhập họ và tên của bạn',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        phone: 'Số Điện Thoại',
        phonePlaceholder: '+84 123 456 789',
        subject: 'Chủ Đề',
        subjectPlaceholder: 'Chủ đề bạn muốn tư vấn',
        message: 'Tin Nhắn',
        messagePlaceholder: 'Nhập tin nhắn của bạn...',
        submit: 'Gửi Tin Nhắn',
        submitting: 'Đang gửi...',
        success: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.',
      },
    },
    footer: {
      description:
        'Chăm sóc sức khỏe của bạn với sự tận tâm và chuyên nghiệp. Bác sĩ Quách Thùy Linh cam kết mang đến dịch vụ y tế chất lượng cao nhất.',
      quickLinks: 'Liên Kết Nhanh',
      services: 'Dịch Vụ',
      contact: 'Liên Hệ',
      copyright: 'Tất cả quyền được bảo lưu. | Được tạo với ❤️ để chăm sóc sức khỏe cộng đồng',
    },
    chat: {
      title: 'BS. Quách Thùy Linh',
      subtitle: 'Bác Sĩ Chuyên Khoa',
      welcome:
        'Chào mừng bạn đến với phòng khám. Vui lòng nhập thông tin trước khi bắt đầu trò chuyện.',
      name: 'Tên của bạn',
      namePlaceholder: 'Nhập tên của bạn',
      phone: 'Số điện thoại của bạn',
      phonePlaceholder: 'Nhập số điện thoại',
      message: 'Tin nhắn',
      messagePlaceholder: 'Nhập tin nhắn của bạn*',
      send: 'Gửi tin nhắn',
      sending: 'Đang gửi...',
      success: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.',
      poweredBy: 'Cung cấp bởi',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      marketing: 'Marketing',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      badge: 'Specialist Doctor',
      title: 'Doctor',
      titleHighlight: 'Quách Thùy Linh',
      description:
        'With many years of experience in the medical field, I am committed to providing high-quality and dedicated healthcare services to all patients.',
      appointment: 'Flexible appointments',
      support: '24/7 Consultation',
      locations: 'Multiple locations',
      bookAppointment: 'Book Appointment',
      learnMore: 'Learn More',
      yearsExperience: 'Years Experience',
      patients: 'Patients',
      satisfaction: 'Satisfaction',
      support24: 'Support',
    },
    about: {
      title: 'About Me',
      subtitle:
        'With passion and unwavering commitment to community healthcare',
      name: 'Dr. Quách Thùy Linh',
      role: 'Specialist Doctor',
      description1:
        'With over 15 years of experience in the medical field, I have successfully treated thousands of patients with various health conditions. My expertise includes accurate diagnosis, effective treatment, and comprehensive care.',
      description2:
        "I believe that every patient deserves the best care. My treatment methods are always personalized based on each individual's specific needs and conditions.",
      description3:
        'In addition to clinical work, I also participate in research and teaching to share knowledge with the next generation of doctors.',
      description4:
        'With a passion for marketing and communication, I have developed expertise in medical content marketing. Currently, I am responsible for marketing strategy and content for Mescells healthcare system - a pioneer in regenerative medicine and cell therapy in Vietnam.',
      achievements: {
        certification: {
          title: 'Specialist Certification',
          description: 'Recognized by leading healthcare organizations',
        },
        education: {
          title: 'Excellent Education',
          description: 'Graduated from prestigious medical universities',
        },
        care: {
          title: 'Dedicated Care',
          description: 'Always prioritizing patient health',
        },
        team: {
          title: 'Professional Team',
          description: 'Working with leading experts',
        },
      },
      education: {
        title: 'Education & Certifications',
        items: [
          {
            year: '2008',
            title: 'Medical Doctor',
            institution: 'Hanoi Medical University',
          },
          {
            year: '2012',
            title: 'Specialist I',
            institution: 'Bach Mai Hospital',
          },
          {
            year: '2018',
            title: 'Specialist II',
            institution: 'Military Medical Academy',
          },
        ],
      },
    },
    services: {
      title: 'Medical Services',
      subtitle: 'Comprehensive and professional healthcare services',
      items: {
        general: {
          title: 'General Check-up',
          description: 'Regular health check-ups and healthy lifestyle consultation',
        },
        cardiology: {
          title: 'Cardiology',
          description: 'Diagnosis and treatment of cardiovascular diseases and hypertension',
        },
        neurology: {
          title: 'Neurology',
          description: 'Treatment of neurological disorders and brain conditions',
        },
        ophthalmology: {
          title: 'Ophthalmology',
          description: 'Eye examination and treatment, eye surgery',
        },
        pediatrics: {
          title: 'Pediatrics',
          description: 'Healthcare for children from newborns to adolescents',
        },
        endocrinology: {
          title: 'Endocrinology',
          description: 'Treatment of endocrine disorders, diabetes, thyroid',
        },
        lab: {
          title: 'Laboratory Tests',
          description: 'Accurate and fast diagnostic tests',
        },
        pharmacy: {
          title: 'Pharmacy Consultation',
          description: 'Consultation on medications and appropriate treatment therapies',
        },
        contentMarketing: {
          title: 'Content Marketing',
          description: 'Creating medical content, marketing strategy for hospitals and clinics',
        },
        medicalWriting: {
          title: 'Medical Writing',
          description: 'Scientific articles, medical reports and professional documents',
        },
      },
    },
    marketing: {
      title: 'Marketing & Content',
      subtitle:
        'Combining medical expertise with marketing to deliver health messages to the community',
      servicesTitle: 'Marketing Services',
      projectsTitle: 'Featured Marketing Projects',
      services: {
        contentMarketing: {
          title: 'Content Marketing',
          description: 'Creating in-depth, easy-to-understand medical content for patients and the community',
        },
        digitalMarketing: {
          title: 'Digital Marketing',
          description: 'Building digital marketing strategies for hospitals and clinics',
        },
        videoContent: {
          title: 'Video Content',
          description: 'Producing health consultation videos, professional medical service introductions',
        },
        medicalWriting: {
          title: 'Medical Writing',
          description: 'Scientific articles, medical reports and professional documents',
        },
        analytics: {
          title: 'Marketing Analytics',
          description: 'Data analysis and measuring marketing campaign effectiveness',
        },
        brandStrategy: {
          title: 'Brand Strategy',
          description: 'Building and developing reputable, professional medical brands',
        },
      },
      projects: {
        mescells: {
          title: 'Content Marketing at Mescells',
          organization: 'Mescells Healthcare System',
          period: '2020 - Present',
          description:
            'Responsible for content marketing and digital marketing strategy for a healthcare system specializing in regenerative medicine and cell therapy',
          achievements: [
            'Built and managed content for mescells.com website',
            'Created 200+ articles on stem cell technology',
            'Increased website traffic by 300% in 2 years',
            'Managed social media channels and community',
          ],
        },
        campaign: {
          title: 'Regenerative Medicine Marketing Campaign',
          organization: 'Mescells',
          period: '2021 - 2023',
          description:
            'Developed and executed marketing campaigns to raise awareness about regenerative medicine and stem cell technology',
          achievements: [
            'Organized 50+ scientific conferences and events',
            'Collaborated with major media: VTV, Tien Phong, Suc Khoe Doi Song',
            'Built a community of 10,000+ members',
            'Won Excellence in Healthcare Marketing Award',
          ],
        },
      },
      stats: {
        articles: 'Content Articles',
        traffic: 'Traffic Growth',
        events: 'Events & Conferences',
        community: 'Online Community',
      },
    },
    experience: {
      title: 'Work Experience',
      subtitle: 'Career development journey in the medical field',
      achievements: 'Achievements:',
      items: [
        {
          year: '2020 - Present',
          position: 'Content & Marketing Manager',
          hospital: 'Mescells Healthcare System',
          location: 'Hanoi',
          description:
            'Responsible for content marketing and digital marketing strategy for a healthcare system specializing in regenerative medicine and cell therapy',
          achievements: [
            'Built and managed content for mescells.com website',
            'Created 200+ articles on stem cell technology',
            'Increased website traffic by 300% in 2 years',
            'Managed social media channels and community',
          ],
        },
        {
          year: '2018 - Present',
          position: 'Chief of Department',
          hospital: 'Central General Hospital',
          location: 'Hanoi',
          description:
            'Manage and operate the department, train young doctors, perform complex surgeries',
          achievements: [
            'Performed over 1000 successful surgeries',
            'Trained 50+ young doctors',
            'Researched and published 20+ scientific papers',
          ],
        },
        {
          year: '2012 - 2018',
          position: 'Specialist Doctor',
          hospital: 'Bach Mai Hospital',
          location: 'Hanoi',
          description:
            'Specialized in treating complex cases, participated in clinical research',
          achievements: [
            'Successfully treated 5000+ patients',
            'Participated in 10+ research projects',
            'Received Outstanding Doctor Award',
          ],
        },
        {
          year: '2008 - 2012',
          position: 'Resident Doctor',
          hospital: 'Hanoi Medical University Hospital',
          location: 'Hanoi',
          description:
            'Studied and practiced clinically under the guidance of leading professors',
          achievements: [
            'Completed residency program with excellence',
            'Participated in many complex surgeries',
            'Achieved high scores in specialty exams',
          ],
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Please contact us to book an appointment or consultation',
      contactInfo: {
        title: 'Contact Information',
        description:
          'We are always ready to listen and support you. Please contact us through any of the methods below.',
        phone: {
          title: 'Phone',
          content: '+84 123 456 789',
        },
        email: {
          title: 'Email',
          content: 'info@quachthuylinh.com',
        },
        address: {
          title: 'Address',
          content: '21 Lê Văn Lương, Hà Nội',
        },
        hours: {
          title: 'Working Hours',
          content: 'Monday - Friday: 8:00 AM - 6:00 PM',
        },
      },
      quickBooking: {
        title: 'Quick Appointment Booking',
        description:
          'You can book an appointment online or call for immediate consultation.',
        button: 'Book Now',
      },
      form: {
        title: 'Send Message',
        name: 'Full Name',
        namePlaceholder: 'Enter your full name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        phone: 'Phone Number',
        phonePlaceholder: '+84 123 456 789',
        subject: 'Subject',
        subjectPlaceholder: 'Subject you want to consult',
        message: 'Message',
        messagePlaceholder: 'Enter your message...',
        submit: 'Send Message',
        submitting: 'Sending...',
        success: 'Thank you for contacting us! We will respond as soon as possible.',
      },
    },
    footer: {
      description:
        'Taking care of your health with dedication and professionalism. Dr. Quách Thùy Linh is committed to providing the highest quality medical services.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      copyright: 'All rights reserved. | Created with ❤️ to care for community health',
    },
    chat: {
      title: 'Dr. Quách Thùy Linh',
      subtitle: 'Specialist Doctor',
      welcome:
        'Welcome to the clinic. Please enter your information before starting the conversation.',
      name: 'Your name',
      namePlaceholder: 'Enter your name',
      phone: 'Your phone number',
      phonePlaceholder: 'Enter your phone number',
      message: 'Message',
      messagePlaceholder: 'Enter your message*',
      send: 'Send message',
      sending: 'Sending...',
      success: 'Thank you for contacting us! We will respond as soon as possible.',
      poweredBy: 'Powered by',
    },
  },
}

export const getTranslation = (lang: Language, key: string): any => {
  const keys = key.split('.')
  let value: any = translations[lang]

  for (const k of keys) {
    value = value?.[k]
    if (value === undefined) return key
  }

  return value
}

