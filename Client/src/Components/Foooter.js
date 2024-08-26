import React from 'react'

function Foooter() {
  return (
    <footer className="w-full text-center py-4 border-t">
          <div className="flex justify-center space-x-4 mb-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/facebook.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div>
          <p className="text-gray-600 text-sm text-wrap">
            © 2024 QuizMo. All rights reserved.
          </p>
          <a
            href="/terms"
            className="text-blue-500 hover:text-blue-700 text-sm text-wrap"
          >
            Terms & Conditions
          </a>
        </footer>
  )
}

export default Foooter