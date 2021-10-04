import React from "react";

export default function blogdetail() {

  return (
<div class="container">
<div class="row">

	<div class="col-md-12">
		<div class="grid email">
			<div class="grid-body">
				<div class="row">
					
					<div class="col-md-3">
						<h2 class="grid-title"><i class="fa fa-inbox"></i> Inbox</h2>
						<a class="btn btn-block btn-primary" data-toggle="modal" data-target="#compose-modal"><i class="fa fa-pencil"></i>&nbsp;&nbsp;NEW MESSAGE</a>

						<hr/>

						<div>
							<ul class="nav nav-pills nav-stacked">
								<li class="header">Folders</li>
								<li class="active"><a href="#"><i class="fa fa-inbox"></i> Inbox (14)</a></li>
								<li><a href="#"><i class="fa fa-star"></i> Starred</a></li>
								<li><a href="#"><i class="fa fa-bookmark"></i> Important</a></li>
								<li><a href="#"><i class="fa fa-mail-forward"></i> Sent</a></li>
								<li><a href="#"><i class="fa fa-pencil-square-o"></i> Drafts</a></li>
								<li><a href="#"><i class="fa fa-folder"></i> Spam (217)</a></li>
							</ul>
						</div>
					</div>
	
					<div class="col-md-9">
						<div class="row">
							<div class="col-sm-6">
								<label style={{marginRight: "8%"}} class="">
									<div class="icheckbox_square-blue" style={{position: "relative"}}><input type="checkbox" id="check-all" class="icheck" style= {{position: "absolute" , top: "-20%" , }}/><ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);"></ins></div>
								</label>
								<div class="btn-group">
									<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
										Action <span class="caret"></span>
									</button>
									<ul class="dropdown-menu" role="menu">
										<li><a href="#">Mark as read</a></li>
										<li><a href="#">Mark as unread</a></li>
										<li><a href="#">Mark as important</a></li>
										<li class="divider"></li>
										<li><a href="#">Report spam</a></li>
										<li><a href="#">Delete</a></li>
									</ul>
								</div>
							</div>

							<div class="col-md-6 search-form">
								<form action="#" class="text-right">
									<div class="input-group">
										<input type="text" class="form-control input-sm" placeholder="Search"/>
										<span class="input-group-btn">
                                            <button type="submit" name="search" class="btn_ btn-primary btn-sm search"><i class="fa fa-search"></i></button></span>
									</div>			 
								</form>
							</div>
						</div>
						
						<div class="padding"></div>
						
						<div class="table-responsive">
							<table class="table">
								<tbody><tr>
									<td class="action"><input type="checkbox" /></td>
									<td class="action"><i class="fa fa-star-o"></i></td>
									<td class="action"><i class="fa fa-bookmark-o"></i></td>
									<td class="name"><a href="#">Larry Gardner</a></td>
									<td class="subject"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </a></td>
									<td class="time">08:30 PM</td>
								</tr>
								<tr>
									<td class="action"><input type="checkbox" /></td>
									<td class="action"><i class="fa fa-star-o"></i></td>
									<td class="action"><i class="fa fa-bookmark"></i></td>
									<td class="name"><a href="#">Larry Gardner</a></td>
									<td class="subject"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </a></td>
									<td class="time">08:30 PM</td>
								</tr>
								<tr class="read">
									
									<td class="action"><i class="fa fa-star"></i></td>
									<td class="action"><i class="fa fa-bookmark"></i></td>
									<td class="name"><a href="#">Larry Gardner</a></td>
									<td class="subject"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </a></td>
									<td class="time">08:30 PM</td>
								</tr>
								<tr>
									<td class="action"><input type="checkbox" /></td>
									<td class="action"><i class="fa fa-star-o"></i></td>
									<td class="action"><i class="fa fa-bookmark-o"></i></td>
									<td class="name"><a href="#">Larry Gardner</a></td>
									<td class="subject"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </a></td>
									<td class="time">08:30 PM</td>
								</tr>
								<tr class="read">
									<td class="action"><input type="checkbox" /></td>
									<td class="action"><i class="fa fa-star-o"></i></td>
									<td class="action"><i class="fa fa-bookmark-o"></i></td>
									<td class="name"><a href="#">Larry Gardner</a></td>
									<td class="subject"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </a></td>
									<td class="time">08:30 PM</td>
								</tr>
								<tr class="read">
                                    <td class="action"><input type="checkbox" /></td>
									<td class="action"><i class="fa fa-star-o"></i></td>
									<td class="action"><i class="fa fa-bookmark"></i></td>
									<td class="name"><a href="#">Larry Gardner</a></td>
									<td class="subject"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </a></td>
									<td class="time">08:30 PM</td>
								</tr>
								<tr>
                                    <td class="action"><input type="checkbox" /></td>
									<td class="action"><i class="fa fa-star"></i></td>
									<td class="action"><i class="fa fa-bookmark-o"></i></td>
									<td class="name"><a href="#">Larry Gardner</a></td>
									<td class="subject"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </a></td>
									<td class="time">08:30 PM</td>
								</tr>
								<tr>
									<td class="action"><input type="checkbox" /></td>
									<td class="action"><i class="fa fa-star-o"></i></td>
									<td class="action"><i class="fa fa-bookmark-o"></i></td>
									<td class="name"><a href="#">Larry Gardner</a></td>
									<td class="subject"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </a></td>
									<td class="time">08:30 PM</td>
								</tr>
								<tr class="read">
									<td class="action"><input type="checkbox" /></td>
									<td class="action"><i class="fa fa-star"></i></td>
									<td class="action"><i class="fa fa-bookmark"></i></td>
									<td class="name"><a href="#">Larry Gardner</a></td>
									<td class="subject"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </a></td>
									<td class="time">08:30 PM</td>
								</tr>
								<tr>
									<td class="action"><input type="checkbox" /></td>
									<td class="action"><i class="fa fa-star"></i></td>
									<td class="action"><i class="fa fa-bookmark-o"></i></td>
									<td class="name"><a href="#">Larry Gardner</a></td>
									<td class="subject"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </a></td>
									<td class="time">08:30 PM</td>
								</tr>
							</tbody></table>
						</div>

						<ul class="pagination">
							<li class="disabled"><a href="#">«</a></li>
							<li class="active"><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">4</a></li>
							<li><a href="#">5</a></li>
							<li><a href="#">»</a></li>
						</ul>						
					</div>
			
					<div class="modal fade" id="compose-modal" tabindex="-1" role="dialog" aria-hidden="true">
						<div class="modal-wrapper">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header bg-blue">
										<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
										<h4 class="modal-title"><i class="fa fa-envelope"></i> Compose New Message</h4>
									</div>
									<form action="#" method="post">
										<div class="modal-body">
											<div class="form-group">
												<input name="to" type="email" class="form-control" placeholder="To"/>
											</div>
											<div class="form-group">
												<input name="cc" type="email" class="form-control" placeholder="Cc"/>
											</div>
											<div class="form-group">
												<input name="bcc" type="email" class="form-control" placeholder="Bcc"/>
											</div>
											<div class="form-group">
												<input name="subject" type="email" class="form-control" placeholder="Subject"/>
											</div>
											<div class="form-group">
												<textarea name="message" id="email_message" class="form-control" placeholder="Message" style= {{height: "120px"}}></textarea>
											</div>
											<div class="form-group">														<input type="file" name="attachment"/>
											</div>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Discard</button>
											<button type="submit" class="btn btn-primary pull-right"><i class="fa fa-envelope"></i> Send Message</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>

</div>
</div>
);
}
