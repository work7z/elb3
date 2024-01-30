package handlers

import (
	"github.com/gin-contrib/gzip"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	r.Use(gzip.Gzip(gzip.DefaultCompression))
	// root
	r.GET("/", func(c *gin.Context) {
		c.Redirect(302, "/v2")
	})
	// index
	r.GET("/", nil)

	// login and logout
	r.GET("/signin", nil)
	r.GET("/signout", nil)
	r.GET("/register", nil)

	// member
	r.GET("/members/:memberId", nil)

	// notification
	r.GET("/notifications", nil)
	r.DELETE("/notifications/:notification_id", nil)

	// topics in node
	r.GET("/go/:nodeId", nil)

	// topic detail
	r.GET("/t/:topicId", nil)

	// other
	r.GET("/help", nil)
	r.GET("/about", nil)
}
